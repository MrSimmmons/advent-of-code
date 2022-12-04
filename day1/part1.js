const fs = require("fs");

const file = fs.readFileSync("./data.txt").toString().split(process.platform === "win32" ? "\r\n" : "\n");

const arr = [[]];

let counter = 0;
let bestNumber = 0;

for (const line of file) {
	const number = parseInt(line);
	if (!isNaN(number)) {
		arr[counter].push(number);
	} else {
		counter++;
		arr.push([]);
	}
}

for (const elf of arr) {
	const total = elf.reduce((x, y) => x + y);
	if (total > bestNumber) bestNumber = total;
}

console.log(bestNumber);
