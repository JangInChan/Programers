const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let N = +input[1] + b;

while (N > 59) {
  a += 1;
  if (a > 23) a = 0;
  N -= 60;
}
console.log(`${a} ${N}`);
