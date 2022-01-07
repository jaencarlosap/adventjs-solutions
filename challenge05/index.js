export default function daysToXmas(date) {
  const merryChristmas = new Date('Dec 25, 2021')
  const diffDays = Math.ceil((merryChristmas - date) / (1000 * 60 * 60 * 24));

  return diffDays
}