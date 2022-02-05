export default function wrapGifts(gifts) {
  if (!gifts && gifts.length == 0) return []
  const wrap = gifts[0].length + 2

  let newGifts = gifts.map(e => `*${e}*`)
  newGifts.unshift("*".repeat(wrap))
  newGifts.push("*".repeat(wrap))

  return newGifts
}