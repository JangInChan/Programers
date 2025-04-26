function solution(a, b) {
  const strA = String(a) + String(b);
  const strB = String(b) + String(a);

  return strA >= strB ? Number(strA) : Number(strB);
}
