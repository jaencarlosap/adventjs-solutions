export default function learn(time, courses) {
	let result = { item1: 0, item2: 0, total: 0 }
	for (let i = 0; i < courses.length; i++) {
		for (let m = i + 1; m < courses.length; m++) {
			let getSum = courses[i] + courses[m]
			if (getSum > result.total && getSum <= time) {
				result = { item1: i, item2: m, total: getSum }
			}
		}
	}
	if (result.total == 0) return null
	return [result.item1, result.item2]
}