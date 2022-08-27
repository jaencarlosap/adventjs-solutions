export default function canMouseEat(direction, game) {
	let flagConsole = false
	let lengthBoard = game.length - 1
	let roomMouse = 0
	let positionMouse = 0
	game.forEach((item, index) => {
		if (item.includes('m')) {
			roomMouse = index
			positionMouse = item.indexOf('m')
		}
		if (item.includes('*')) flagConsole = true
	})
	if (direction === 'left') positionMouse--
	if (direction === 'right') positionMouse++
	if (direction === 'up') roomMouse--
	if (direction === 'down') roomMouse++
	const getValueOfGame = game?.[roomMouse]?.[positionMouse]
	const isFood = getValueOfGame && getValueOfGame === '*' || false
	console.log({ direction, game, isFood })
	if (flagConsole) {
		console.log({ positionMouse, roomMouse, lengthBoard })
	}

	return isFood
}