const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const a = Number(input[0]);

for (i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
