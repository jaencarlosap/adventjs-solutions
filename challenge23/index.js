export default function canReconfigure(from, to) {
	let flag = false
	if (from.length == to.length) {
		let dictionary = {}
		for (let i = 0; i < from.length; i++) {
			console.log({ from: from[i], to: to[i] })
			const getValue = Object.values(dictionary)
			if (
				(!dictionary[from[i]] && !getValue.includes(to[i])) ||
				dictionary[from[i]] == to[i]
			) {
				dictionary[from[i]] = to[i]
				flag = true
			} else {
				flag = false
				break
			}
		}
		console.log({ from, to, flag, dictionary })
	}

	return flag
}