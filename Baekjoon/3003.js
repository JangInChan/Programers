const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const chess = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) {
  const result = chess[i] - parseInt(input[i]);
  console.log(result);
}
