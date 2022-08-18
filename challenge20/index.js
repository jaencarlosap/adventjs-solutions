export default function pangram(letter) {
	return new Set(
		letter
			.toLowerCase()
			.normalize('NFD')
			.replace(/([^\u0300-\u036fn]|n(?!\u0303))[\u0300-\u036F]/g, '')
			.replace(/[^\u0303a-z]/g, '')
	).size === 27
}