const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input.length - 1; i++) {
  let b = input[i].split(" ").map((c) => c * 1);
  console.log(b[0] + b[1]);
}
