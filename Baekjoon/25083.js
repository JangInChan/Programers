const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log("         ,r'\"7");
console.log("r`-_   ,'  ,/");
console.log(" \\. \". L_r'");
console.log("   `~\\/");
console.log("      |");
console.log("      |");
