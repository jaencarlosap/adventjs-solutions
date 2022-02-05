export default function shouldBuyFidelity(times) {
  const valueTicket = 12
  const valueFidelity = 250
  const valueDiscount = 0.75

  const calculateTotalMount = numberTimes => {
    if (numberTimes > 0) {
      return valueTicket * valueDiscount ** numberTimes + calculateTotalMount(numberTimes - 1)
    }

    return 0
  }

  const valueTotalTicketNormal = valueTicket * times
  const valueTotalTicketFidelity = valueFidelity + calculateTotalMount(times)

  return valueTotalTicketFidelity < valueTotalTicketNormal
}