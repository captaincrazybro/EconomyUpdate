const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix; 
let money = require("../money.json");
let invest = require("../invest.json");
let stock = require("../stock.json");
let bank = require("../bank.json");
let xp = require("../xp.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let pA = message.author;
	let pAv = pA.avatarURL;
	
	if(args.length === 1){
		
		let moUser = (message.mentions.users.first() || message.guild.members.get(args[0]));
		let moUserAvatar = moUser.avatarURL;
		
		if(!moUser) return message.channel.send(":x:" + "***Please specify a valid and existing user***");
		
		
		if(!xp[moUser.id]){
			xp[moUser.id] = {
				xp: 0,
				level: 0
			}
			fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
				if (err) console.log(err);
			})
		}
		
/* 		if(!money[moUser.id]){
			money[moUser.id] = {
				money: 0
			}
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
		} */
		
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
		
		let tEm = new Discord.RichEmbed()
			.setTitle(moUser.username)
			.setColor("GREEN")
			.setThumbnail(moUser.avatarURL)
			.setDescription("Catch Phrase here")
			.addField("Status", "Status here")
			.addField("XP", xp[moUser.id].xp, true)
			.addField("Level", xp[moUser.id].level, true)
			.addField("Money", moneyValue, true)
			.addField("Net Worth", mNet, true);
			
		message.channel.send(tEm);
		
	}else{		
		
		if(!xp[pA.id]){
			xp[pA.id] = {
				xp: 0,
				level: 0
			}
			fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
				if (err) console.log(err);
			})
		}
		
		if(!money[pA.id]){
			money[pA.id] = {
				money: 0
			}
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		if(!invest[pA.id]){
			invest[pA.id] = {
				StockA: 0,
				StockB: 0,
				StockC: 0
			}
			fs.writeFile("./invest.json", JSON.stringify(invest), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		if(!bank[pA.id]){
			bank[pA.id] = {
				money: 0
			}
			fs.writeFile("./bank.json", JSON.stringify(bank), (err) => {
				if (err) console.log(err);
			}); 
		}
		
		let moneyValue = money[pA.id].money;
		let mInv = stock["stock"].StockA * invest[pA.id].StockA + stock["stock"].StockB * invest[pA.id].StockB + stock["stock"].StockC * invest[pA.id].StockC;
		let mNet = moneyValue + mInv + bank[pA.id].money;
		
		let pEm = new Discord.RichEmbed()
			.setTitle(pA.username)
			.setColor("GREEN")
			.setThumbnail(pA.avatarURL)
			.setDescription("Catch Phrase here")
			.addField("Status", "Status here")
			.addField("XP", xp[pA.id].xp, true)
			.addField("Level", xp[pA.id].level, true)
			.addField("Money", moneyValue, true)
			.addField("Net Worth", mNet, true);
			
		message.channel.send(pEm);
		
	}

}
	
module.exports.help = {
	name: `${prefix}profile`
}
	