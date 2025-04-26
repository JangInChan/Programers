const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

for (i = 1; i <= T; i++) {
  let str = input[i].trim();
  let end = str.length - 1;

  console.log(input[i].substring(0, 1) + input[i].substring(end));
}
