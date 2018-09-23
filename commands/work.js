const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
const ms = require("ms");
let prefix = botConfig.prefix;
let money = require("../money.json");
let cooldown = require("../cooldown.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let wAuthor = message.author;
	let aRan = Math.floor(Math.random() * 400) + 100;
	let workNum = Math.floor(Math.random() * 15);
	let authAvatar = wAuthor.avatarURL;
	let aId = message.author.id;
	let coolIt = cooldown["cool"].work;
	let amount = aRan;
	
	if(!money[aId]){
		money[aId] = {
			money: 0,
			delay: "go"
		}
	}
	
	let mesg = "";
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 
	
	if(money[aId].delay === "delay") return message.channel.send("***You are too tired and can not work now. Wait a bit and try again later.***");
	
	if(workNum === 0){
		 mesg = "You worked for H3X-Z3 and achieved " + aRan + " bucks";
	}
	if(workNum === 1){
		 mesg = "You develop Super Paintball on Mineplex and earned " + aRan;
	}
	if(workNum === 2){
		 mesg = "What's that? You love discord? That's great!!! I'll give you " + aRan;
	}
	if(workNum == 3){
		 mesg = "I've been working on the railroad.... And earned " + aRan;
	}
	if(workNum === 4){
		 mesg = "You develop a new feature for Fortnite and gain " + aRan;
	}
	if(workNum === 5){
		 mesg = "Your YouTube channel booms and you earn " + aRan;
	}
	if(workNum === 6){
		 mesg = "You win a giveaway from a famous YouTuber, a prize of " + aRan + " silver cart wheels";
	}
	if(workNum === 7){
		 mesg = "Eureka! You design an ingenious tech idea and cash in " + aRan;
	}
	if(workNum === 8){
		 mesg = "You make it in to the big leagues... You didn't do too good but got " + aRan;
	}
	if(workNum === 9){
		 mesg = "What's this? An inheritance!!! You get " + aRan;
	}
	if(workNum === 10){
		 mesg = "You get a job at McDonalds and earn " + aRan;
	}
	if(workNum === 11){
		 mesg = "You are chosen to be apart of a space mission. You make 350 " + aRan;
	}
	if(workNum === 12){
		mesg = "You develop a bot for a discord server and earn " + aRan;
	}
	if(workNum === 13){
		mesg = "You buy something on Ebay and sell it for more. You cash in " + aRan;
	}
	if(workNum === 14){
		mesg = "Work for a shoe manufacturer. You get " + aRan;
	}
	if(workNum === 15){
		mesg = "You get a job at Hypixel and collect " + aRan;
	}
	
	let workEmbed = new Discord.RichEmbed()
		.setColor("GREEN")
		.setAuthor(wAuthor.username, authAvatar)
		.setDescription(mesg + " :white_check_mark:");
		
	message.channel.send(workEmbed);
	
	money[aId].delay = "delay";
	money[aId].money += amount;

	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 
	
	setTimeout(function workWait(){
		money[aId].delay = "go";
	}, ms(cooldown["cool"].work));
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 
	
}

module.exports.help = {
	name: `${prefix}work`
}	