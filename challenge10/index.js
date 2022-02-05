export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  let changeTemp = change;

  return coins.reverse().map(coin => {
    const value = Math.floor(changeTemp / coin)
    changeTemp %= coin
    return value;
  }).reverse()
}