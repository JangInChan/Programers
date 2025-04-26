const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0].split(" ")[1]);
const X = input[1].split(" ").map((v) => Number(v));
const result = X.filter((v) => v < N);

console.log(result.join(" "));
