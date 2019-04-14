import Environment from '../../environment'
import Constants from '../../network/constants.json'

export default class RoomModel {

	constructor(id, map) {
		this.id = id
		this.map = map

		this.init()
	}

	init() {
		const currentRoom = Environment.instance.roomManager.roomByID(this.id)

		this.map.forEach((squares, row) => {

			squares.forEach((square, index) => {

				if (square !== this.squareType.BLANK) {

					const x = (row * 32) + (index * 32)
					const y = ((row * 32) - (index * 32)) / 2
					const z = square[1] * 3 || 0

					Environment.instance.server.socketIO.to(this.id).emit(Constants.common.actions.room.NEW_TILE,
						x, y, z, currentRoom.properties.floor.thickness, this.leftEdge(z, row, index), this.bottomEdge(z, row, index))
				}
			})
		})
	}

	leftEdge(height, row, index) {
		const leftSquare = row[index - 1]

		if (height) {

			if (leftSquare) {

				const leftHeight = leftSquare[1]

				if (leftHeight) {

					if (leftHeight !== height) {
						return true
					}

				} else {
					return true
				}

			} else {
				return true
			}

		} else if (leftSquare !== this.squareType.TILE) {
			return true
		}
	}

	bottomEdge(height, row, index) {
		const bottomSquares = this.map[row + 1]

		if (height) {
			if (bottomSquares) {
				const bottomHeight = bottomSquares[1]

				if (bottomHeight) {
					if (bottomHeight !== height) {
						return true
					}
				}

			} else {
				return true
			}

		} else {

			if (bottomSquares) {
				const bottomSquare = bottomSquares[index]

				if (bottomSquare !== this.squareType.TILE) {
					return true
				}

			} else {
				return true
			}
		}
	}

	get squareType() {
		return {
			BLANK: 0,
			TILE: 1,
		}
	}
}
