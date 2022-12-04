const fs = require("fs");

const file = fs.readFileSync("./data.txt").toString().split(process.platform === "win32" ? "\r\n" : "\n");

const enRock = "A",
	enPaper = "B",
	enScissors = "C",
	plRock = "X",
	plPaper = "Y",
	plScissors = "Z";

let total = 0;

for (const row of file) {
	if (
		(row[0] == enRock && row[2] == plPaper) ||
		(row[0] == enPaper && row[2] == plScissors) ||
		(row[0] == enScissors && row[2] == plRock)
	) {
		total += 6;
	} else if (
		(row[0] == enRock && row[2] == plRock) ||
		(row[0] == enPaper && row[2] == plPaper) ||
		(row[0] == enScissors && row[2] == plScissors)
	) {
		total += 3;
	}

	total += getPlayedValue(row[2]);
}

function getPlayedValue(playerValue) {
	return playerValue == plRock ? 1 : playerValue == plPaper ? 2 : 3;
}

console.log(total);
