const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map((x) => Number(x));

num.sort((a, b) => a - b);

console.log(`${num[0]} ${num[N - 1]}`);
