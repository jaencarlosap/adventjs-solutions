export default function isValid(letter) {
  const textParenthesis = letter.match(/(?:\()[^()]*?(?:\))/g)
  let flag = true

  if (textParenthesis != null) {
    textParenthesis.map(text => {
      if (!flag) return
      if (text.length > 2) {
        flag = !(text.includes("[") || text.includes("{"))
      } else {
        flag = false
      }
    })
  } else {
    flag = false
  }

  return flag
}