const scores = [85, 92, 58, 74, 66, 100, 43];

//  1번 등급구하기
console.log("============ 1번 ==============");
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 문제1. 등급구하기 결과 예시
console.log(getGrade(92)); // A
console.log(getGrade(74)); // C
console.log(getGrade(43)); // F
