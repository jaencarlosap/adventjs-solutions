export default function missingReindeer(ids) {
  const order = ids.sort((a, b) => { return a - b })
  const array = [...Array(order.length + 1).keys()]
  const valida = array.find(elem => !order.includes(elem) && elem) || 0
  return valida
}