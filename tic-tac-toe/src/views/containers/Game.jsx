import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';

import { gameOperations } from '../../state/ducks/game';

import Board from '../components/Board.jsx';

class Game extends Component {
  constructor(props, context) {
    super(props, context);

    // binding 'this' to the handler so we can use 'this' to refer to props of this class
    this.handleBoardOnMove = this.handleBoardOnMove.bind(this);
  }

  handleBoardOnMove(square) {
    // when a square is clicked we want to mark that square for the current player

    const { board, player, gameover, playTurn, checkWinner } = this.props;
    const { row, col } = square;

    // only mark if the game is still in progress and the square is empty (none)
    // otherwise, ignore the play
    if (gameover || board[row][col] !== 0) {
      return;
    }

    // make a play for the player
    playTurn(player, row, col);
    // then check for a winner
    checkWinner(board, player);
  }

  render() {
    const { board, player, gameover } = this.props;

    return (
      // at extra-small (xs) size the grid show have two rows
      // at small (sm+) and above we want 2 columns
      // Grid 'item' in a container must have columns (xs, sm, md, etc.) that add up to 12, per grid docs:
      // https://material-ui-next.com/layout/grid/
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
          <Board board={board} onMove={this.handleBoardOnMove} />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          {!gameover && `Current player: ${player}`}
          {gameover && 'Gameover!'}
        </Grid>
      </Grid>
    );
  }
}

const { arrayOf, number, func, bool } = PropTypes;

// we want to list our props for validation even though 
// we are using react-redux to map our state and dispatch
// to the props of this Game component
Game.propTypes = {
  board: arrayOf(arrayOf(number)).isRequired,
  player: number.isRequired,
  gameover: bool.isRequired,
  playTurn: func.isRequired,
  checkWinner: func.isRequired
};

const mapStateToProps = (state) => {
  const { gameState } = state;

  return {
    board: gameState.board,
    player: gameState.player,
    gameover: gameState.gameover
  };
};

const mapDispatchToProps = {
  playTurn: gameOperations.playTurn,
  checkWinner: gameOperations.checkWinner
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);