const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[1].split(" ").map(Number);
const v = Number(input[2]);
const reult = N.filter((n) => n === v).length;

console.log(reult);
