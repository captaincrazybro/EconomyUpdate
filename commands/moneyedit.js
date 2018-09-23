const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
const ms = require("ms");
let prefix = botConfig.prefix;
let money = require("../money.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:" + " ***You do not have permission to execute this command***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	if(!args[0]) return message.channel.send(":x: ***Please how you want to edit money***");
	let mmUs = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
	if(!mmUs) return message.channel.send(":x: ***Please specify the user you want to give money to***");
	let mInt = parseInt(args[2]);
	if(isNaN(mInt)) return message.channel.send(":x: ***Please specify the amount of money you want to give to this user***");
	 
		
		if(!money[mmUs.id]){
			money[mmUs.id] = {
				money: 0
			}
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
		}
	
	if(args[0] === "add"){
		
		money[mmUs.id].money += mInt;
		message.channel.send(":white_check_mark: **Added " + mmUs + " to " + mInt + "***");
		
		fs.writeFile("./money.json", JSON.stringify(), (err) => {
            if (err) console.log(err);
        });
		
	}
	if(args[0] === "subtract"){
		money[mmUs.id].money += -mInt;
		message.channel.send(":white_check_mark: **Subtracted " + mmUs + " to " + mInt + "***");
		
		fs.writeFile("./money.json", JSON.stringify(), (err) => {
            if (err) console.log(err);
        });
	}
	
	if(args[0] === "set"){
		money[mmUs.id].money = mInt;
		message.channel.send(":white_check_mark: **Set " + mmUs + "'s money to " + mInt + "***");
		
		fs.writeFile("./money.json", JSON.stringify(), (err) => {
            if (err) console.log(err);
        });
	}
	
}

module.exports.help = {
	name: `${prefix}money`
}