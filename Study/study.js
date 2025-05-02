function countWithDelay() {
  console.log("카운트 시작...");

  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("카운트 함수 종료");
}

countWithDelay();
