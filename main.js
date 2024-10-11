import Board from './board.js';

const board = new Board();
const nightMoves = board.knightMoves([0, 0], [7, 7]);
console.log(nightMoves);
