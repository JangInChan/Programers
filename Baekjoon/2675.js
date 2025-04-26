const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = input.shift();

for (let i = 0; i < S; i++) {
  let R = "";
  const [S2, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    R += str[j].repeat(S2);
  }

  console.log(R);
}
