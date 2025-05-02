const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => item % 42);

const set = new Set(arr);

const result = [...set];

console.log(result.length);
