const fs = require("fs");

const file = fs
	.readFileSync("./data.txt")
	.toString()
	.split(process.platform === "win32" ? "\r\n" : "\n");

const tree = {};

const path = [];

for (let i = 0; i < file.length; i++) {
    const row = file[i];

    const words = row.split(' ');

    if (words[0] === "$") {
        if (words[1] === "cd") {
            if (words[2] === "..") {
                path.pop();
                continue;
            } else {
                path.push(words[2]);
                const value = hasValue(path, tree);
                if (value) {
                    value[words[2]] = {};
                } else {
                    let holder = tree;
                    for (let j = 0; j < path.length - 1; j++) {
                        holder = holder[path[j]];
                    }

                    holder[words[2]] = {}
                }
            }
        } else if (words[1] === "ls") {
            let k = 1;
            do {
                const nextLineWords = file[i + k].split(' ');
                if (nextLineWords[0] !== "dir") {
                    const value = hasValue(path, tree);
                    value[nextLineWords[1]] = nextLineWords[0];
                }
                k++;
            } while (file[i + k][0] !== "$");
            i += k - 1;
        }
    }
}

const folders = [];


function hasValue(pathArr, obj) {
    return pathArr.reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

async function recursiveBurrow(obj, firstKey) {

    return new Promise((res, _rej) => {
        setTimeout(async () => {
            const keys = Object.keys(obj[firstKey]);

            let totalValue = 0;

            for (const key of keys) {
                const value = obj[firstKey][key];

                if (typeof value == 'number') totalValue += value;
                else if (typeof value == 'string') totalValue += parseInt(value);
                else {
                    totalValue += await recursiveBurrow(obj[firstKey], key);
                }
            }

            folders.push(totalValue);

            res(totalValue);
        }, 0);
    })
}

async function main() {
    await recursiveBurrow(tree, '/');

    let newTotal = 0;
    folders.map(x => newTotal += x <= 100000 ? x : 0 );
    console.log(newTotal);
}

main();


