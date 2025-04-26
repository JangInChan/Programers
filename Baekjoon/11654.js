const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const str = input[0];
const result = str.charCodeAt(0);

console.log(result);
