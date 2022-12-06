const fs = require("fs");

const file = fs
	.readFileSync("./data.txt")
	.toString()
	.split(process.platform === "win32" ? "\r\n" : "\n")[0];

let string = "";

for (let i = 0; i < file.length; i++) {
	const character = file[i];
	if (string.length > 3) {
		if ([...new Set(string.split(""))].length === string.length) {
			console.log(i);
			break;
		} else {
			string = string.slice(1);
		}
	}

	string += character;
}
