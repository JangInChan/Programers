const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = Number(input[0]);

for (i = 1; i <= a; i++) {
  let b = input[i].split(" ");
  console.log(Number(b[0]) + Number(b[1]));
}
