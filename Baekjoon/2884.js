const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (b >= 45) {
  console.log(`${a} ${b - 45}`);
} else if (a >= 1 && b < 45) {
  console.log(`${a - 1} ${b + 15}`);
} else if (a == 0 && b < 45) {
  console.log(`${23} ${b + 15}`);
}
