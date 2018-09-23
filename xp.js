const Discord = require("discord.js");
let xp = require("./xp.json");
let money = require("./money.json");

module.exports.run = async (bot,message,args,cmd,fs) => {
	
	let xpRan = Math.floor(Math.random() * 3) + 1;
	let aX = message.author;
	
		if(!xp[aX.id]){
            xp[aX.id] = {
                xp: 0,
				level: 0
            }
            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                if (err) console.log(err);
            })
        }
		
		if(!money[aX.id]){
			money[aX.id] = {
				money: 0
			}
			fs.writeFile("./money.json", JSON.stringify(money), (err) => {
				if (err) console.log(err);
			}); 
		}

	xp[aX.id].xp += xpRan;
	money[aX.id].money += xpRan;
	
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
		if (err) console.log(err);
	}); 
	
	fs.writeFile("./money.json", JSON.stringify(money), (err) => {
		if (err) console.log(err);
	}); 
	
	let xpX = xp[aX.id].xp;
	let xpL = xp[aX.id].level;
	
	if(xpL === 0 && xpX >= 25){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 1!***");
		
	}
	else if(xpL === 1 && xpX >= 50){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 2!***");
	}
	else if(xpL === 2 && xpX >= 100){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 3!***");
	}
	else if(xpL === 3 && xpX >= 100){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 4!***");
	}
	else if(xpL === 4 && xpX >= 200){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 5!***");
	}
	else if(xpL === 5 && xpX >= 400){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 6!***");
	}
	else if(xpL === 6 && xpX >= 700){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 7!***");
	}
	else if(xpL === 7 && xpX >= 1000){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 8!***");
	}
	else if(xpL === 8 && xpX >= 1500){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 9!***");
		
	}
	else if(xpL === 9 && xpX >= 400){
		xp[aX.id].level += 1;
		
		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(":white_check_mark: ***You are now on level 10!***");
	}
	
}