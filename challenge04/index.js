export default function createXmasTree(height) {
  let tree = ''
  let totalStars = 1
  let totalLength = height * 2

  for (let levels = 0; levels < height; levels++) {
    if (levels != 0) totalStars += 2
    let underscore = ''
    let totalUnderscore = totalLength - totalStars
    let center = '*'.repeat(totalStars)
    if (totalUnderscore > 0) underscore = '_'.repeat(totalUnderscore / 2)

    tree += `${underscore}${center}${underscore}\n`
  }
  let underscore = '_'.repeat((totalLength - 1) / 2)
  let center = '#'
  tree += `${underscore}${center}${underscore}\n`
  tree += `${underscore}${center}${underscore}`

  return tree
}