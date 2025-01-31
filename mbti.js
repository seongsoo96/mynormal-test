/**
 * MBTI를 계산하는 프로그램을 작성해주세요.
 *
 * 아래 questions 배열은 MBTI를 계산하기 위한 문항들입니다.
 * 모든 문항에 대한 선택지는 다섯개로 동일하며 다음과 같습니다.
 *   매우 아니다, 아니다, 보통이다, 그렇다, 매우 그렇다
 *
 * 선택지에 따라 다음과 같이 점수를 부여합니다.
 *   매우 아니다는 disagree 타입에 2점
 *   아니다는 disagree 타입에 1점
 *   보통이다는 양쪽에 0점
 *   그렇다는 agree 타입에 1점
 *   매우 그렇다는 agree 타입에 2점
 *
 * 예를 들어 첫 번째 문항인 `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`에
 * 매우 아니다라고 답하면 E 타입에 2점
 * 아니다라고 답하면 E 타입에 1점
 * 보통이다라고 답하면 양쪽에 0점
 * 그렇다라고 답하면 I 타입에 1점
 * 매우 그렇다라고 답하면 I 타입에 2점을 부여합니다.
 *
 * 자리가 같은 두 알파벳의 점수가 같은 경우 다음과 같이 처리합니다.
 *   E == I: E
 *   S == N: N
 *   F == T: F
 *   P == J: P
 * 따라서 모든 항목에 보통이다라고 답하면 결과는 ENFP가 됩니다.
 */

const questions = [
  {
    disagree: "E",
    agree: "I",
    text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`,
  },
  {
    disagree: "S",
    agree: "N",
    text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.`,
  },
  {
    disagree: "T",
    agree: "F",
    text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.`,
  },
  {
    disagree: "J",
    agree: "P",
    text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.`,
  },
  {
    disagree: "E",
    agree: "I",
    text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.`,
  },
  {
    disagree: "S",
    agree: "N",
    text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.`,
  },
  {
    disagree: "T",
    agree: "F",
    text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.`,
  },
  {
    disagree: "J",
    agree: "P",
    text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.`,
  },
]

// 여기에 코드를 작성해주세요. 사용자의 응답은 상수로 작성하셔도 무방합니다.

// 0: 매우아니다, 1: 아니다, 2: 보통이다, 3: 그렇다, 4: 매우그렇다
const responses = [1, 4, 2, 3, 0, 1, 3, 2]

const calculateMBTI = (questions, responses) => {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

  questions.forEach((question, index) => {
    const response = responses[index]

    switch (response) {
      case 0:
        scores[question.disagree] -= 2
        break
      case 1:
        scores[question.disagree] -= 1
        break
      case 3:
        scores[question.agree] += 1
        break
      case 4:
        scores[question.agree] += 2
        break
    }
  })

  const mbti =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.N >= scores.S ? "N" : "S") +
    (scores.F >= scores.T ? "F" : "T") +
    (scores.P >= scores.J ? "P" : "J")

  return mbti
}

const result = calculateMBTI(questions, responses)
console.log(result)
