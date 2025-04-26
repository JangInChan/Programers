const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input.length; i++) {
  let a = input[i].split(" ");
  console.log(Number(a[0]) + Number(a[1]));
}
