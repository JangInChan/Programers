const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = String(input[0]);
const i = Number(input[1]);

console.log(s[i - 1]);
