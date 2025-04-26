const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [a, b] = input.split(" ").map(Number);

console.log(a + b);
