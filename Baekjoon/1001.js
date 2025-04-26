const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const rawInput = fs.readFileSync(filePath).toString().trim();

const tokens = rawInput.split(/\s+/).map(Number);

const a = tokens[0];
const b = tokens[1];

console.log(a - b);
