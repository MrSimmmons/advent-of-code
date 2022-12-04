const fs = require("fs");

const file = fs.readFileSync("./data.txt").toString().split(process.platform === "win32" ? "\r\n" : "\n");

let total = 0;

for (let i = 0; i < file.length; i += 3) {
	const row1 = file[i],
		row2 = file[i + 1],
		row3 = file[i + 2];
	let map = {};

	for (const character of row1) {
		if (row2.includes(character) && row3.includes(character)) {
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
