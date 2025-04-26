function solution(price) {
  let dis = 0;
  if (price >= 500000) {
    dis = price * 0.2;
  } else if (price >= 300000) {
    dis = price * 0.1;
  } else if (price >= 100000) {
    dis = price * 0.05;
  }

  return price - Math.ceil(dis);
}
