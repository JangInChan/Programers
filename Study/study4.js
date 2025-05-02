// 간단한 문제 4: 비동기 함수와 콜백 순서
// 이 함수는 사용자 데이터를 가져온 후 처리하려고 합니다
async function processUserData() {
  let userData = null;

  // 서버에서 데이터를 가져오는 비동기 작업 시뮬레이션
  userData = await fetchUserData();

  // 가져온 데이터 처리
  processData(userData);

  console.log("사용자 데이터 처리 완료!");
}

// 비동기로 사용자 데이터를 가져오는 함수
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      const data = { id: 123, name: "홍길동", role: "관리자" };
      resolve(data);
    }, 1000);
  });
}

// 데이터 처리 함수
function processData(data) {
  if (data) {
    console.log("처리된 사용자:", data.name, "(", data.role, ")");
  } else {
    console.log("처리할 데이터가 없습니다!");
  }
}

// 테스트
processUserData();
// 수정 후 출력:
// (1초 후)
// "처리된 사용자: 홍길동 ( 관리자 )"
// "사용자 데이터 처리 완료!"
/*
디버깅 과제:
1. 왜 fetchUserData의 콜백이 실행되기 전에 processData가 호출되는지 이해하세요
2. 콜백 패턴을 사용하여 올바른 순서로 함수가 실행되도록 수정해보세요
3. 같은 문제를 Promise를 사용해 해결해보세요
4. 같은 문제를 async/await를 사용해 해결해보세요
*/
