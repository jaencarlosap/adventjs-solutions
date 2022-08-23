export default function countDecorations(bigTree) {
	let total = bigTree.value;
	['left', 'right'].forEach(position => {
		const dataPosition = bigTree[position] || {}
		const sizePosition = Object.keys(dataPosition).length;
		if (sizePosition > 0) {
			total += countDecorations(dataPosition)
		}
	});
	return total
}