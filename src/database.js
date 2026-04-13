require('../HAN_EDIT');
const fs = require('fs');
const toMs = require('ms');
const path = require('path');
const chalk = require('chalk');
const mongoose = require('mongoose');


class JsonDB {
	
	
	read = async () => {
		let data;
		if (fs.existsSync(this.file)) 
		return data
	}
	
	write = async (data) => {
		this.data = data || {}
		if (this.isWriting) {
			this.writePending = false;
			return;
		}
		this.isWriting = true;
		
	}
}

const dataBase = (source) => {
	if (/^mongodb(\+srv)?:\/\//i.test(source)) {
		return new MongoDB(source);
	}
	return new JsonDB(source);
}

const cmdAdd = (hit) => {
	if (hit && !hit.totalcmd) {
		hit.totalcmd = 0;
	}
	if (hit && !hit.todaycmd) {
		hit.todaycmd = 0;
	}
	hit.totalcmd++;
	hit.todaycmd++;
}
const cmdDel = (hit) => {
	hit.todaycmd = 0
}

const cmdAddHit = (hit, feature) => {
	if (hit && !hit[feature]) {
		hit[feature] = 0;
	}
	if (hit) hit[feature]++;
}



module.exports = {
	dataBase,
	cmdAdd,
	cmdDel,
	cmdAddHit,
	

};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)

});
