const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input[1].split("");

let plus = N.reduce((acc, v) => {
  return (acc += v / 1);
}, 0);

console.log(plus);
