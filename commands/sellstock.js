const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
const ms = require("ms");
let prefix = botConfig.prefix;
let money = require("../money.json");
let stock = require("../stock.json");
let invest = require("../invest.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let ssAuth = message.author;
	let amountSS = parseInt(args[1]);
	
	if(isNaN(amountSS)) return message.channel.send(":x: ***Please specify the amount of stocks you want to sell of "  + args[0] + "***")
	if(!amountSS){
		return message.channel.send(":x: ***Please specify the number of stocks you wish to withdraw to withdraw.***");
	}
	if(args[0] === "Alpha"){
		if(amountSS > invest[ssAuth.id].StockA){
			return message.channel.send(":x: ***You have not bought this many stocks. You only have " + invest[ssAuth.id].StockA + " stocks.***");
		}else{
			money[ssAuth.id].money += amountSS * stock["stock"].StockA;
			invest[ssAuth.id].StockA += -amountSS;
			
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
			
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
			
			let aEmbed = new Discord.RichEmbed()
				.setColor("GREEN")
				.setAuthor(ssAuth.username, ssAuth.avatarURL)
				.setDescription("You sold " + amountSS + " and gained " + amountSS * stock["stock"].StockA + " :white_check_mark:");
				
			message.channel.send(aEmbed);
			return; 
		}
	}
	if(args[0] === "Beta"){
		if(amountSS > invest[ssAuth.id].StockB){
			return message.channel.send(":x: ***You have not bought this many stocks. You only have " + invest[ssAuth.id].StockB + " stocks.***");
		}else{
			money[ssAuth.id].money += amountSS * stock["stock"].StockB;
			invest[ssAuth.id].StockB += -amountSS;
			
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
			
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
			
			let bEmbed = new Discord.RichEmbed()
				.setColor("GREEN")
				.setAuthor(ssAuth.username, ssAuth.avatarURL)
				.setDescription("You sold " + amountSS + " and gained " + amountSS * stock["stock"].StockB + " :white_check_mark:");
				
			message.channel.send(bEmbed);
			return; 
		}
	}
	if(args[0] === "Omega"){
		if(amountSS > invest[ssAuth.id].StockC){
			return message.channel.send(":x: ***You have not bought this many stocks. You only have " + invest[ssAuth.id].StockC + " stocks.***");
		}else{
			money[ssAuth.id].money += amountSS * stock["stock"].StockC;
			invest[ssAuth.id].StockC += -amountSS;
			
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
			
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
			
			let cEmbed = new Discord.RichEmbed()
				.setColor("GREEN")
				.setAuthor(ssAuth.username, ssAuth.avatarURL)
				.setDescription("You sold " + amountSS + " and gained " + amountSS * stock["stock"].StockC + " :white_check_mark:");
				
			message.channel.send(cEmbed);
			return; 
		}
	}else{
		message.channel.send(":x: ***Please specify a valid and existing stock***");
		return;
	}
}

module.exports.help = {
	name: `${prefix}sellstock`
}