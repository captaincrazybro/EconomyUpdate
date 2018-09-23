const Discord = require("discord.js");
const ms = require("ms");
const botConfig = require("../botsettings");
let prefix = botConfig.prefix;
let cooldown = require("../cooldown.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x:" + " ***You do not have permission to execute this command***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	}); 
	
	let iArgs = `${args[0]}`;
	let coolAmount = args[1];
	
	if(!cooldown["cool"]){
		cooldown["cool"] = {
			cooldown: ""
		}
	}
	
	if(args[0] === "work"){
	
		cooldown["cool"].work = coolAmount;
		
		message.channel.send("Set the work cooldown");
	
		fs.writeFile("./cooldown.json", JSON.stringify(cooldown), (err) => {
			if (err) console.log(err);
		});
		return;
	}
	if(args[0] === "rob"){
		
		cooldown["cool"].rob = coolAmount;
		
		message.channel.send("Set the rob cooldown");
		
		fs.writeFile("./cooldown.json", JSON.stringify(cooldown), (err) => {
			if (err) console.log(err);
		});
		return;
	}
	if(args[0] === "crime"){
		
		cooldown["cool"].crime = coolAmount;
		
		message.channel.send("Set the crime cooldown");
		
		fs.writeFile("./cooldown.json", JSON.stringify(cooldown), (err) => {
			if (err) console.log(err);
		});
		return;
	}else{
		message.channel.send(`${args[0]}`);
	}
}

module.exports.help = {
	name: `${prefix}set-cooldown`
}