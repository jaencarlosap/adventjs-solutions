export default function maxProfit(prices) {
  return prices.reduce((maxValue, price, index, array) => {
    const valueMax = Math.max(...array.slice(index + 1)) - price
    return valueMax > 0 && valueMax > maxValue ? valueMax : maxValue;
  }, -1)
}