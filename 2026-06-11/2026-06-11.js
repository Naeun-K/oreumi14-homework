const scores = [85, 92, 58, 74, 66, 100, 43];

// 문제 1. 등급구하기
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

// 문제 2. 합격 여부 구하기
console.log("============ 2번 ==============");
function isPassed(score) {
  if (score >= 60) {
    return true;
  }
  return false;
}
// 문제2. 합격 여부 구하기 결과 예시
console.log(isPassed(85)); // true
console.log(isPassed(43)); // false

// 문제 3. 평균 점수 구하기
console.log("============ 3번 ==============");

function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}
// 문제 3. 평균 점수 구하기 결과 예시
console.log(getAverage(scores)); // 74

// 문제 4. 합격 점수만 모으기
console.log("============ 4번 ==============");
function getPassedScores(scores) {
  return scores.filter((score) => {
    return score >= 60;
  });
}
// 문제 4. 합격 점수만 모으기 결과 예시
console.log(getPassedScores(scores));
// [85, 92, 74, 66, 100]

// 문제 5. 점수 설명 만들기
console.log("============ 5번 ==============");
function getScoreMessages(scores) {
  return score.map((score) => {
    return `${score}점은 ${getGrade(score)}등급입니다.`;
  });
}
// 문제 5. 점수 설명 문장 만들기 결과 예시
// console.log(getScoreMessages(scores));

// 문제 6. 전체 리포트 출력하기
console.log("============ 6번 ==============");
function printScoreReport(scores) {
  return scores.forEach((score) => {
    console.log(
      `${score}점: ${getGrade(score)}등급, ${isPassed(score) ? "합격" : "불합격"}`,
    );
  });
}
// 문제 6. 전체 리포트 출력하기 결과 예시
printScoreReport(scores);

// 문제 7. 최종 요약 출력하기
