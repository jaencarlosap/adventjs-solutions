export default function checkIsSameTree(treeA, treeB) {
	let flag = false
	if (treeA.value == treeB.value) {
		['left', 'right'].forEach(position => {
			const dataPositionA = treeA[position] || {}
			const dataPositionB = treeB[position] || {}
			if (dataPositionA.value == dataPositionB.value) {
				flag = true
				const sizePositionA = Object.keys(dataPositionA).length;
				const sizePositionB = Object.keys(dataPositionB).length;
				if (sizePositionA > 0 && sizePositionB > 0) {
					flag = checkIsSameTree(dataPositionA, dataPositionB)
				}
			}
		});
	}

	return flag
}