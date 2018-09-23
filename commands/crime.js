const Discord = require("discord.js");
const ms = require("ms");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;
let money = require("../money.json");
let coolC = require("../cooldown.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let cAuth = message.author;
	let cRan = Math.floor(Math.random() * 15);
	let mRan = Math.floor(Math.random() * 1800) + 200;
	let pRan = Math.floor(Math.random() * 4);
	
	if(!money[cAuth.id]){
		money[cAuth.id] = {
			money: 0,
			cdelay: "go"
		}
	}
	
	let crime = "";
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 
	
	if(money[cAuth.id].cdelay === "delay") return message.channel.send(":x: ***You cannot commit a crime now, you would blow your cover! Best to just wait. Try again in a bit.***");
	
	if(cRan === 0){
		crime = "rob a bank";
	}
	if(cRan === 1){
		crime = "hack the Nazis computers";
	}
	if(cRan === 2){
		crime = "threatened someone to give you money";
	}
	if(cRan === 3){
		crime = "steal someone's information and sell it";
	}
	if(cRan === 4){
		crime = "installing a virus on someone's computer";
	}
	if(cRan === 5){
		crime = "hack into the presidents computer";
	}
	if(cRan === 6){
		crime = "pickpocket a random person";
	}
	if(cRan === 7){
		crime = "steal someone's phone";
	}
	if(cRan === 8){
		crime = "hack someone's PayPal account";
	}
	if(cRan === 9){
		crime = "kidnap someone and got ransom";
	}
	if(cRan === 10){
		crime = "hypnotize an opera house";
	}
	if(cRan === 11){
		crime = "steal someone's technology idea";
	}
	if(cRan === 12){
		crime = "copy an artist's painting";
	}
	if(cRan === 13){
		crime = "sabotage a plane";
	}
	if(cRan === 14){
		crime = "bomb pearl harbor";
	}
	if(cRan === 15){
		crime = "rob a flower shop";
	}
	
	cMesg = "";
	
	if(pRan === 0 || pRan === 3){
		cMesg = "You " + crime + " and get " + mRan + " :white_check_mark:";
		money[cAuth.id].money += mRan;
	}else{
		cMesg = "You were caught trying to " + crime + ". You are fined  " + mRan + " :x:";
		money[cAuth.id].money += -mRan;
	}
	
	let cEmbed = new Discord.RichEmbed()
		.setColor("GREEN")
		.setAuthor(cAuth.username, cAuth.avatarURL)
		.setDescription(cMesg);
		
	message.channel.send(cEmbed)
	
	//money[cAuth.id].cdelay = "delay"; 
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 	

	setTimeout(function crimeWait(){
		money[rAuthor.id].rdelay = "go";
	}, ms(coolC["cool"].crime));
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
    }); 
	
}

module.exports.help = {
	name: `${prefix}crime`
}