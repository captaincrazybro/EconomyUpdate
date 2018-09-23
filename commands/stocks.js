const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
const ms = require("ms");
let prefix = botConfig.prefix;
let stocks = require("../stock.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let StockA = stocks["stock"].StockA;
	let StockB = stocks["stock"].StockB;
	let StockC = stocks["stock"].StockC;
	
	let stocksEmbed = new Discord.RichEmbed()
		.setColor("GREEN")
		.setTitle("Available Stocks")
		.setDescription("Alpha - " + StockA + "\nBeta- " + StockB + "\nOmega - " + StockC);
		
	message.channel.send(stocksEmbed);
	
}

module.exports.help = {
	name: `${prefix}stocks`
}