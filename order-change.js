/**
 * selected 배열에 포함된 data 배열의 원소들을 왼쪽으로 한 칸씩 옴기는 프로그램을 작성해주세요.
 *
 * 예) data = [1, 2, 3], selected = [1],       data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2],       data' = [2, 1, 3]
 * 예) data = [1, 2, 3], selected = [3],       data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [1, 2],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2, 1],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [1, 3],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [3, 1],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [2, 3],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [3, 2],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [1, 2, 3], data' = [1, 2, 3]
 */

const data = [1, 2, 3]
const selected = [1]

const orderChange = (data, selected) => {
  const selectedSet = new Set(selected)

  const result = [...data]

  const selectedIndexes = selected
    .map((v) => data.indexOf(v))
    .sort((a, b) => a - b)

  for (const index of selectedIndexes) {
    if (index > 0 && !selectedSet.has(result[index - 1])) {
      const temp = result[index - 1]
      result[index - 1] = result[index]
      result[index] = temp
    }
  }

  return result
}

const changedData = orderChange(data, selected)

console.log(changedData)
