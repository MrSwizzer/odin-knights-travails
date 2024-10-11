export default class Board {
	constructor() {
		this.board = this.createBoard();
	}

	createBoard() {
		const boardArr = [];

		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				boardArr.push([i, j]);
			}
		}

		return boardArr;
	}

	logBoard() {
		for (let row = 7; row >= 0; row--) {
			let rowArr = [];
			for (let col = 0; col < 8; col++) {
				const index = row * 8 + col;
				rowArr.push(`[${this.board[index][0]},${this.board[index][1]}]`);
			}
			console.log(rowArr.join(' '));
		}
	}

	knightMoves(startSquare, endSquare) {
		const queue = [[startSquare]];
		const visitedSquares = [];

		while (queue.length > 0) {
			const currentPath = queue.shift();
			const currentSquare = currentPath[currentPath.length - 1];

			if (currentSquare[0] === endSquare[0] && currentSquare[1] === endSquare[1]) {
				return this.formatPath(currentPath);
			}

			const squareKey = currentSquare.toString();
			if (!visitedSquares.includes(squareKey)) {
				visitedSquares.push(squareKey);

				const possibleMoves = this.possibleKnightMoves(currentSquare);

				for (const possibleMove of possibleMoves) {
					//Copy current Path
					const newPath = currentPath.slice();

					//add the new Move
					newPath.push(possibleMove);
					queue.push(newPath);
				}
			}
		}

		return null; // Wenn kein Pfad gefunden wurde
	}

	//possibleKnightMoves([3,3])
	possibleKnightMoves(startSquare) {
		if (startSquare === null || startSquare[0] < 0 || startSquare[1] < 0 || startSquare[0] > 7 || startSquare[1] > 7) {
			return null;
		}

		const knightsNextMoves = [
			[-2, -1],
			[-1, -2],
			[+1, -2],
			[+2, -1],
			[+2, +1],
			[+1, +2],
			[-1, +2],
			[-2, +1],
		];
		const possibleKnightMovesArr = [];

		for (let index = 0; index < knightsNextMoves.length; index++) {
			const tempYCoordinate = startSquare[0] + knightsNextMoves[index][0];
			const tempXCoordinate = startSquare[1] + knightsNextMoves[index][1];

			if (tempYCoordinate >= 0 && tempXCoordinate >= 0 && tempYCoordinate <= 7 && tempXCoordinate <= 7) {
				possibleKnightMovesArr.push([tempYCoordinate, tempXCoordinate]);
			}
		}

		return possibleKnightMovesArr;
	}

	formatPath(path) {
		return path.map((square) => `(${square[0]}, ${square[1]})`).join(' -> ');
	}
}
