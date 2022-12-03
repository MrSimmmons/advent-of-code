const fs = require("fs");

const file = fs.readFileSync("./data.txt").toString().split("\n");

let total = 0;

for (const row of file) {
	let map = {};

	const compartment1 = row.slice(0, row.length / 2);
	const compartment2 = row.slice(row.length / 2, row.length);

	for (const character of compartment1) {
		if (compartment2.includes(character)) {
			if (!map.hasOwnProperty(character)) {
				map[character] = 0;
			}

			map[character]++;
		}
	}
	const char = Object.keys(map)[0];

	console.log(`${char}: ${getValue(char)}`);

	total += getValue(char);
}

console.log(total);

function getValue(letter) {
	if (letter == letter.toUpperCase()) {
		return letter.charCodeAt(0) - 38;
	}
	return letter.charCodeAt(0) - 96;
}
