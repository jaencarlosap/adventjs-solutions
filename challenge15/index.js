export default function checkSledJump(heights) {
  const maxPoint = heights.indexOf(Math.max(...heights));
  const isAllowed = maxPoint !== 0 && maxPoint !== heights.length - 1;
  const isLogic = heights.every((height, index, array) =>
    index < maxPoint ? height < array[index + 1] : height > (array[index + 1] ?? Number.NEGATIVE_INFINITY)
  )

  return isAllowed && isLogic
}