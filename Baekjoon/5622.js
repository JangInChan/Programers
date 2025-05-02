const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const str = input[0];
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if (arr[i].includes(str[j])) {
      count += i + 3;
    }
  }
}

console.log(count);
