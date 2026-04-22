//Promisification: Convert a callback-based function (like fs.readFile) into a Promise-based one.
const fs = require('fs')

const txtPath = 'test.txt';

fs.readFile(txtPath, 'utf8', (error: Error | null, data: string) => { 
	if (error) {
		console.log(JSON.stringify(error));
		return;
	}

	console.log(data);
 });