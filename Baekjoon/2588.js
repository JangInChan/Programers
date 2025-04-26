const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const rawInput = fs.readFileSync(filePath).toString().trim();

// ✅ 숫자 입력용 (ex: 연산 문제)
const tokens = rawInput.split(/\s+/).map(Number);

// ✅ 문자열 입력용 (ex: 단어 출력 문제)
const words = rawInput.split(/\s+/);

// ✅ 줄 입력용 (ex: 줄마다 다른 입력 문제)
const lines = rawInput.split("\n");

// 👉 숫자 문제 풀 때는 tokens[i]
// 👉 문자열 문제 풀 때는 words[i]
// 👉 줄 단위 문제 풀 때는 lines[i]

const first = tokens[0];
const second = tokens[1];

const one = second % 10;
const ten = Math.floor((second % 100) / 10);
const hundred = Math.floor(second / 100);

console.log(first * one);
console.log(first * ten);
console.log(first * hundred);
console.log(first * second);
