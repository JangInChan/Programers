const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = Number(input[0]);
let answer = "";

for (let i = 1; i <= a; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
