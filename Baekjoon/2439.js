const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = Number(input[0]);
let star = "";

for (i = 1; i <= N; i++) {
  star += "*";
  console.log(" ".repeat(N - i) + star);
}
