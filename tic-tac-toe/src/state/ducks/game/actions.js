/*
  These are the different actions of the game duck.  Note that these are different than
  operations of the duck.
*/

import * as types from './types';

const newGame = () => ({
  type: types.NEW_GAME
});

const gameover = () => ({
  type: types.GAMEOVER
});

const movePlayer = (player, row, col) => ({
  type: types.MOVE,
  payload: { player, row, col }
});

const switchPlayer = player => ({
  type: types.PLAYER,
  payload: player
});

const winner = player => ({
  type: types.WINNER,
  payload: player
});

export {
  newGame,
  gameover,
  movePlayer,
  switchPlayer,
  winner
};