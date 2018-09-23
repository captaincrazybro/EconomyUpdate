const Discord = require("discord.js");
const ms = require("ms");
const botConfig = require("../botsettings");
let prefix = botConfig.prefix;
let money = require("../money.json");
let stocks = require("../stock.json");
let invest = require("../invest.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let authS = message.author;
	let amountS = parseInt(args[1]);
	
	if(isNaN(amountS)) return message.channel.send(":x: ***Please specify the amount of stocks you want to buy of "  + args[0] + "***");

	if(!amountS){
		return message.channel.send(":x: ***Please specify the number of stocks you wish to invest.");
	}
		if(args[0] === "Alpha"){
			if(amountS * stocks["stock"].StockA > money[authS.id].money){
				return message.channel.send(":x: ***You do not have enough money to buy " + amountS + " stocks. You need " + diffA + " more.***");
			}
			let diffA = money[authS.id].money - amountS * stocks["stock"].StockA;
			let aMon = amountS * stocks["stock"].StockA
			money[authS.id].money += -aMon
			invest[authS.id].StockA += amountS;
			
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
			
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
						

			let StockAEmbed = new Discord.RichEmbed()
				.setColor("GREEN")
				.setAuthor(authS.username, authS.avatarURL)
				.setDescription("You invested " + aMon + " in Alpha. :white_check_mark:");

			message.channel.send(StockAEmbed);
		}
		else if(args[0] === "Beta"){
			if(amountS * stocks["stock"].StockB > money[authS.id].money){
				return message.channel.send(":x: ***You do not have enough money to buy " + amountS + " stocks. You need " + diffA + " more.***");
			}
			let diffB = money[authS.id].money - amountS * stocks["stock"].StockB;
			let bMon = amountS * stocks["stock"].StockB
			money[authS].money += -bMon
			invest[authS.id].StockB += amountS;
			
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
			
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
			
			
			let StockBEmbed = new Discord.RichEmbed()
				.setColor("GREEN")
				.setAuthor(authS.username, authS.avatarURL)
				.setDescription("You invested " + aMon + " in Alpha. :white_check_mark:");
					
			message.channel.send(StockBEmbed);
		}
		else if(args[1] === "Omega"){
			if(amountS * stocks[authS.id].StockC > money[authS.id].money){
				return message.channel.send(":x: ***You do not have enough money to buy " + amountS + " stocks. You need " + diffA + " more.***");
			}
			let difC = money["stock"].money - amountS * stocks["stock"].StockC;
			let cMon = amountS * stocks["stock"].StockC
			money[authS].money += -cMon
			invest[authS.id].StockC += amountS;
			
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
			
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
			
			
			let StockCEmbed = new Discord.RichEmbed()
				.setColor("GREEN")
				.setAuthor(authS.username, authS.avatarURL)
				.setDescription("You invested " + aMon + " in Alpha. :white_check_mark:");

			message.channel.send(StockCEmbed);
		} else {
			message.channel.send(":x: ***Please specify a valid stock***");
			return;			
		}
}

module.exports.help = {
	name: `${prefix}invest`
}