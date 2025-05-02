const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "a").length);
