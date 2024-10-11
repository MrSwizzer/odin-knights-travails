import Board from './board.js';

const board = new Board();
board.logBoard();
console.log('\n');

board.possibleKnightMoves([3, 3]);
