const fs = require("fs");

const file = fs.readFileSync("./data.txt").toString().split("\r\n");

let total = 0;

for (const row of file) {
	const pairs = row.split(",");
	const range1 = pairs[0].split("-").map((x) => parseInt(x));
	const range2 = pairs[1].split("-").map((x) => parseInt(x));

	if (
		(range1[0] >= range2[0] && range1[0] <= range2[1]) ||
		(range1[1] >= range2[0] && range1[1] <= range2[1]) ||
		(range2[0] >= range1[0] && range2[0] <= range1[1]) ||
		(range2[1] >= range1[0] && range2[1] <= range1[1])
	) {
		total++;
	}
}

console.log(total);
