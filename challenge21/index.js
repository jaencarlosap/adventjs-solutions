export default function canCarry(capacity, trip) {
	let countGift = 0
	//count,start,finish
	let previousStop = [0, 0, 0]
	trip.forEach(value => {
		if (previousStop[2] > 0 && value[1] >= previousStop[2]) {
			countGift -= previousStop[0]
		}
		countGift += value[0]
		previousStop = value
		console.log(value, "value")
	})
	return capacity >= countGift
}