const fs = require("fs");

const file = fs.readFileSync("./data.txt").toString().split(process.platform === "win32" ? "\r\n" : "\n");

const enChoice = {
	A: 1,
	B: 2,
	C: 3
};

const plDraw = "Y",
	plWin = "Z";

let total = 0;

for (const row of file) {
	if (row[2] == plWin) {
		total += 6 + ((enChoice[row[0]] % 3) + 1);
	} else if (row[2] == plDraw) {
		total += 3 + enChoice[row[0]];
	} else {
		const plChoice = (enChoice[row[0]] - 1) % 3;
		total += plChoice ? plChoice : 3;
	}
}

console.log(total);
