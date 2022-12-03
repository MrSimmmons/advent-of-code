const fs = require("fs");

const file = fs.readFileSync("data.txt").toString().split("\n");

const arr = [[]];
const finalArr = [];

let counter = 0;

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
	finalArr.push(elf.reduce((x, y) => x + y));
}

let sortedArr = finalArr.sort((a, b) => a - b);

console.log(sortedArr[sortedArr.length - 1] + sortedArr[sortedArr.length - 2] + sortedArr[sortedArr.length - 3]);
