import Board from './board.js';

const board = new Board();
const startSquare = [0, 0];
const endSquare = [7, 7];
const nightMoves = board.knightMoves(startSquare, endSquare);
console.log(nightMoves);
