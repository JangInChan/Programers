const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const X = Number(input[0]);
let answer = 0;

for (let i = 2; i < input.length; i++) {
  const [prime, num] = input[i].split(" ").map(Number);
  let plus = prime * num;
  answer += plus;
}

answer == X ? console.log("Yes") : console.log("No");
