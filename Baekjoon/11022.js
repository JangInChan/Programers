const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let b = input[i].split(" ");
  console.log(
    `Case #${i}: ${Number(b[0])} + ${Number(b[1])} = ${
      Number(b[0]) + Number(b[1])
    }`
  );
}
