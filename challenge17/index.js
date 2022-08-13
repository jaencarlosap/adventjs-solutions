export default function countPackages(carriers, carrierID) {
	console.log({ carriers, carrierID })
	const getItems = (list) => {
		let countItems = 0
		list.forEach(itemList => {
			const getItem = carriers.find(carrie => {
				return carrie[0] == itemList
			})
			if (getItem[2].length > 0) countItems += getItems(getItem[2])
			countItems += getItem[1]
		})
		return countItems
	}

	const getList = carriers.find(carrie => {
		return carrie[0] == carrierID
	})
	let count = getList[1]
	count += getItems(getList[2])

	console.log({ count, getList })
	return count
}