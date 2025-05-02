const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const basket = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const subBasket = basket.slice(start - 1, end).reverse();
  basket.splice(start - 1, end - start + 1, ...subBasket);
}

console.log(basket.join(" "));
