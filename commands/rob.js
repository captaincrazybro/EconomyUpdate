const Discord = require("discord.js");
const ms = require("ms");
const botConfig = require("../botsettings");
let prefix = botConfig.prefix;
let money = require("../money.json");
let rCool = require("../cooldown.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let rAuthor = message.author;
	let sus = Math.floor(Math.random() * 4);
	let rRan = Math.floor(Math.random() * 900) + 100;
	let coolD = rCool["cool"].rob;
	let robbed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	
	if(!money[rAuthor.id]){
		money[rAuthor.id] = {
			money: 0,
			rdelay: "go"
		}
	}
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 
	
	if(money[rAuthor.id].rdelay === "delay") return message.channel.send("***You cannot rob someone now, you would blow your cover! Best to just wait. Try again in a bit.***");
		
	let robs = "";
		
	if(sus === 0 || sus === 3){
		robs = "You robbed " + `${rRan}` + " from " + `${robbed}` + " :white_check_mark:";
		money[rAuthor.id].money += rRan;
		money[robbed.id].money += -rRan;
	}else{
		robs = "You were caught robbing " + `${robbed}` + " and were fined " + `${rRan}` + " :x:";
		money[rAuthor.id].money += -rRan;
	}
	
	let robsEmbed = new Discord.RichEmbed()
		.setColor("GREEN")
		.setAuthor(rAuthor.username, rAuthor.avatarURL)
		.setDescription(robs);
		
	message.channel.send(robsEmbed);
	
	//money[rAuthor.id].rdelay = "delay";
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 	

	setTimeout(function robWait(){
		money[rAuthor.id].rdelay = "go";
	}, ms(rCool["cool"].rob));
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 	
	
}

module.exports.help = {
	name: `${prefix}rob`
}