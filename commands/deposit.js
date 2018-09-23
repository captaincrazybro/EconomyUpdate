const Discord = require("discord.js");
const ms = require("ms");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;
let bank = require("../bank.json");
let money = require("../money.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let bAuth = message.author;
	let bAmn = parseInt(args[0]);
	
	if(isNaN(bAmn)) return message.channel.send(":x: ***Please specify the amount of money you want to deposit to your bank***");
	
		
 	if(!bank[bAuth.id]){
		bank[bAuth.id] = {
			money: 0
		}
		
		fs.writeFile("./money.json", JSON.stringify(money), (err) => {
			if (err) console.log(err);
		}); 
	}
	
	if(!money[bAuth.id]){
		money[bAuth.id] = {
			money: 0
		}
		
		fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
			if (err) console.log(err);
		}); 
	} 
	
	
	if(!args[0]){
		return message.channel.send(":x: ***Please specify an amount to deposit to your bank");
	}
	if(bAmn > money[bAuth.id].money){
		return message.channel.send(":x: ***You are wanting to deposit more than you have. You are wanting to deposit " + bAmn + " but you only have " + money[bAuth.id].money + ".***");
	}else{
		
		let sAmnn = bank[bAuth.id].money + bAmn;
	
		if(sAmnn === null ) return message.channel.send(":x: ***Please specify the amount of money you want to deposit to your bank.***");
		
		money[bAuth.id].money += -bAmn;
		bank[bAuth.id].money = sAmnn;
		
 		fs.writeFile("./money.json", JSON.stringify(money), (err) => {
			if (err) console.log(err);
		}); 
		
		fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
			if (err) console.log(err);
		});  
		
		let bankEmbed = new Discord.RichEmbed()
			.setColor("GREEN")
			.setAuthor(bAuth.username, bAuth.avatarURL)
			.setDescription("You have deposited " + bAmn + " to the bank. You now have " + money[bAuth.id].money + " cash. :white_check_mark:");
			
		message.channel.send(bankEmbed);
	}
}

module.exports.help = {
	name: `${prefix}deposit`
}