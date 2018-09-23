const Discord = require("discord.js");
const ms = require("ms");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;
let bank = require("../bank.json");
let money = require("../money.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let wAuth = message.author;
	let wAm = parseInt(args[0]);
	
	if(isNaN(wAm)) return message.channel.send(":x: ***Please specify the amount of money you want to withdraw from your bank***");
		
 	if(!bank[wAuth.id]){
		bank[wAuth.id] = {
			money: 0
		}
		
		fs.writeFile("./money.json", JSON.stringify(money), (err) => {
			if (err) console.log(err);
		}); 
	}
	
	if(!money[wAuth.id]){
		money[wAuth.id] = {
			money: 0
		}
		
		fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
			if (err) console.log(err);
		}); 
	} 
	
	if(!args[0]){
		return message.channel.send(":x: ***Please specify an amount to withdraw from your bank");
	}
	if(wAm > bank[wAuth.id].bank){
		return message.channel.send(":x: ***You do not have " + wAm + " in your bank. You currently only have " + bank[wAuth.id].bank + " in your bank.")
	}else{
		money[wAuth.id].money += wAm;
		bank[wAuth.id].money += -wAm;
		
		fs.writeFile("./money.json", JSON.stringify(money), (err) => {
			if (err) console.log(err);
		}); 
		
		fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
			if (err) console.log(err);
		}); 
		
		let withdrawEmbed = new Discord.RichEmbed()
			.setColor("GREEN")
			.setAuthor(wAuth.username, wAuth.avatarURL)
			.setDescription("You have withdrawn " + wAm + " from your bank. :white_check_mark:");
			
		message.channel.send(withdrawEmbed);
	}
}

module.exports.help = {
	name: `${prefix}withdraw`
}