const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");
let stock = require("./stock.json");

module.exports.run = async () => {

let aPlus = Math.floor(Math.random() * 150) + 1;
let aFind = Math.floor(Math.random() * 5);

let bPlus = Math.floor(Math.random() * 450) + 50;
let bFind = Math.floor(Math.random() * 5);

let cPlus = Math.floor(Math.random() * 850) + 50;
let cFind = Math.floor(Math.random() * 5);

if(!stock["stock"]){
	stock["stock"] = {
		StockA: 250,
		StockB: 500,
		StockC: 1000
	};
}

fs.writeFile("./stock.json", JSON.stringify(stock), (err) => {
	if (err) console.log(err);
}); 

setInterval(function change(){
	
	if(aFind === 0 || aFind === 3){
		stock["stock"].StockA + aPlus;
	}else{
		stock["stock"].StockA - aPlus;
	}
	
	if(bFind === 0 || bFind === 3){
		stock["stock"].StockB + bPlus;
	}else{
		stock["stock"].StockB + bPlus;
	}
	
	if(cFind === 0 || bFind === 3){
		stock["stock"].StockC + cPlus;
	}else{
		stock["stock"].StockC + cPlus;
	}
	
	fs.writeFile("./stock.json", JSON.stringify(stock), (err) => {
		if (err) console.log(err);
    }); 
	
}, 3600000);

setInterval(function reset(){
	
	stock["stock"] = {
		StockA: 250,
		StockB: 500,
		StockC: 1000
	}
	
	fs.writeFile("./stock.json", JSON.stringify(stock), (err) => {
		if (err) console.log(err);
    }); 

}, ms("20d"));	
}
