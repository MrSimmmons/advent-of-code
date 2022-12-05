const fs = require("fs");

const file = fs
	.readFileSync("./moves.txt")
	.toString()
	.split(process.platform === "win32" ? "\r\n" : "\n");

let string = "";

let columns = [
	["T", "V", "J", "W", "N", "R", "M", "S"],
	["V", "C", "P", "Q", "J", "D", "W", "B"],
	["P", "R", "D", "H", "F", "J", "B"],
	["D", "N", "M", "B", "P", "R", "F"],
	["B", "T", "P", "R", "V", "H"],
	["T", "P", "B", "C"],
	["L", "P", "R", "J", "B"],
	["W", "B", "Z", "T", "L", "S", "C", "N"],
	["G", "S", "L"]
];

columns.map((x) => x.reverse());

for (const row of file) {
	// const numbers = row.match(/\d/g).map(x => parseInt(x)); // Doesnt work for 2 digit numbers

	const split = row.split(" ");
	const numbers = [split[1], split[3], split[5]].map((x) => parseInt(x));

	console.log(numbers);

	for (let i = 0; i < numbers[0]; i++) {
		columns[numbers[2] - 1].push(columns[numbers[1] - 1].pop());
	}
}

for (const column of columns) {
	string += column[column.length - 1];
}

console.log(string);
