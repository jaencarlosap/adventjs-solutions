export default function fixFiles(files) {
	let count = {}
	const response = files.map(file => {
		const number = count[file]
		const addorment = number > 0 ? `(${number})` : ''
		count[file] = (count[file] || 0) + 1;
		return file + addorment
	})
	return response
}