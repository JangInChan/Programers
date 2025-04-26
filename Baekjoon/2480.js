const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

let money = 0;
let maxNum = 0;

if (a === b && a === c) {
  money = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
  if (a === b || a === c) {
    money = 1000 + a * 100;
  } else {
    money = 1000 + b * 100;
  }
} else {
  maxNum = Math.max(...input);
  money = maxNum * 100;
}

console.log(money);
