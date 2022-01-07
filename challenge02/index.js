export default function listGifts(letter) {
  let listGifts = {}
  letter.split(" ").filter(gif => !/^_/.test(gif)).forEach(gif => {
    if (gif == "") return false
    if (!listGifts[gif]) {
      listGifts[gif] = 1
    } else {
      listGifts[gif] = listGifts[gif] + 1
    }
  })


  return listGifts
}