const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = Number(input[0]);
let b = 0;

for (let i = 1; i < a + 1; i++) {
  b += i;
}

console.log(b);
