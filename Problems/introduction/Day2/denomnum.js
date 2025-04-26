function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1; // 분자
  const denom = denom1 * denom2; // 분모

  const M = (a, b) => (a % b == 0 ? b : M(b, a % b));
  const N = M(numer, denom);

  return [numer / N, denom / N];
}
