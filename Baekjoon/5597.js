const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];

for (let i = 1; i <= 30; i++) {
  arr.push(i);
}

const result = arr.filter((x) => !input.includes(x));

console.log(result.join(" "));
