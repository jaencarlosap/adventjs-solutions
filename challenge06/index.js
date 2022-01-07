export default function sumPairs(numbers, result) {
  let array = []

  for (let [index, value] of numbers.entries()) {
    let valueTotal = Math.abs(result - value)
    let tempArray = numbers.filter((_, i) => i !== index)

    if (tempArray.includes(valueTotal)) {
      array.push(value)
      array.push(valueTotal)
      break
    }
  }

  return array.length > 0 ? array : null
}