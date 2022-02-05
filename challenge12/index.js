export default function getMinJump(obstacles) {
  const order = obstacles.sort((a, b) => { return a - b })
  const list = Array(Math.max(...obstacles)).fill('.')
  for (let item of order) {
    list[item] = 'x'
  }

  console.log(list)

  for (let jumpValue = 2; ; jumpValue++) {
    if (order.every(obstacle => obstacle % jumpValue !== 0)) {
      return jumpValue;
    }
  }
}