/*
  Our operations are simple.  We can just forward the actions one for one.  Later on, 
  if we have more complex operations that require dispatching multiple actions, we can
  write them and export them here.
*/

import { newGame, gameover, switchPlayer, winner, movePlayer } from './actions';
import { isWinner, isDraw } from '../../utils/game';

// NOTE: we can probably use mapDispatchToProps in the component and dispatch each of these 
// actions one after another ourselves, but using redux-thunk to defer or conditionally 
// dispatch is better and keeps our code clean in the components and operations

/**
 * Checks for a winner, if there is one, we dispatch two actions, one for winning the 
 * game (winner) and another for gameover.
 * If there isn't a winner, we need to check to see if the game ended in a draw, if so
 * we dispatch the same two actions, but with the player being NONE (0).
 * Finally, do nothing if the above two conditions aren't met.
 * @param {number[][]} board The game board
 * @param {number} player The current player
 * @returns {boolean} True, if there is a winner or a draw, false otherwise
 */
const checkWinner = (board, player) => (dispatch) => {
  // the logic to check if a player has won or the game ended in a draw are in 
  // the utils/game.js file.

  // instead of returning a promise like we would if we were making an api call
  // from our operations, we just return a boolean for the game winner
  let hasWinner = true;

  if (isWinner(board, player)) {
    dispatch(winner(player));
    dispatch(gameover());
  } else if (isDraw(board)) {
    dispatch(winner(0));
    dispatch(gameover());
  } else {
    hasWinner = false;
  }

  return hasWinner;
};

/**
 * When a player plays a turn we need to mark that spot on the board.  We then need to 
 * switch to the next player
 * @param {number} player The current player
 * @param {number} row The row on the board
 * @param {number} col The column on the board
 */
const playTurn = (player, row, col) => (dispatch) => {
  let nextPlayer;

  switch (player) {
    case 1:
      nextPlayer = 2;
      break;
    case 2:
      nextPlayer = 1;
      break;
    default:
      // throw error?
      break;
  }

  dispatch(movePlayer(player, row, col));
  dispatch(switchPlayer(nextPlayer));
};

export {
  newGame,
  checkWinner,
  playTurn
};