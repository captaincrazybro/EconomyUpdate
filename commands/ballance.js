const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;
let money = require("../money.json");
let invest = require("../invest.json");
let stock = require("../stock.json");
let bank = require("../bank.json");
let xp = require("../xp.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let author = message.author;
	
	if(args.length === 1){
		
		let moUser = (message.mentions.users.first() || message.guild.members.get(args[0]));
		let moUserAvatar = moUser.avatarURL;
		
		if(!moUser) return message.channel.send(":x:" + "***Please specify a valid and existing user***");
		
		if(!xp[moUser.id]){
			xp[moUser.id] = {
				xp: 0
			}
			fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
				if (err) console.log(err);
			})
		}
		
		if(!money[moUser.id]){
			money[moUser.id] = {
				money: 0
			}
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		if(!invest[moUser.id]){
			invest[moUser.id] = {
				StockA: 0,
				StockB: 0,
				StockC: 0
			}
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		if(!bank[moUser.id]){
			bank[moUser.id] = {
				money: 0
			}
			fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		let moneyValue = money[moUser.id].money;
		let mInv = stock["stock"].StockA * invest[moUser.id].StockA + stock["stock"].StockB * invest[moUser.id].StockB + stock["stock"].StockC * invest[moUser.id].StockC;
		let mNet = moneyValue + mInv + bank[moUser.id].money;
		
		let moEmbed = new Discord.RichEmbed()
			.setColor("GREEN")
			.setAuthor(moUser.username + "'s balance", moUserAvatar)
			.setDescription("**Money**: " + moneyValue + "\n**Net Worth**: " + mNet + "\n**Stocks**:\n*Alpha*: " + stock["stock"].StockA * invest[moUser.id].StockA + "\n*Beta*: " + stock["stock"].StockB * invest[moUser.id].StockB + "\n*Omega*: " + stock["stock"].StockC * invest[moUser.id].StockC + "\n**Bank**: " + bank[moUser.id].money);
			
		message.channel.send(moEmbed);
		
	}else{
		
		let authorAvatar = author.avatarURL;
		
		if(!money[author.id]){
			money[author.id] = {
				money: 0
			}
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		if(!invest[author.id]){
			invest[author.id] = {
				StockA: 0,
				StockB: 0,
				StockC: 0
			}
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		if(!bank[author.id]){
			bank[author.id] = {
				money: 0
			}
			fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		let authorValue = money[author.id].money;
		let aInv = stock["stock"].StockA * invest[author.id].StockA + stock["stock"].StockB * invest[author.id].StockB + stock["stock"].StockC * invest[author.id].StockC;
		let aNet = authorValue + aInv + bank[author.id].money;

		let balanceEmbed = new Discord.RichEmbed()
			.setColor("GREEN")
			.setAuthor(author.username + "'s balance", authorAvatar)
			.setDescription("**Money**: " + authorValue + "\n**Net Worth**: " + aNet + "\n**Stocks**:\n*Alpha*: " + stock["stock"].StockA * invest[author.id].StockA + "\n*Beta*: " + stock["stock"].StockB * invest[author.id].StockB + "\n*Omega*: " + stock["stock"].StockC * invest[author.id].StockC + "\n**Bank**: " + bank[author.id].money);
			
		message.channel.send(balanceEmbed);
		
	}
	
}

module.exports.help = {
	name: `${prefix}balance`
}