import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gameOperations } from '../state/ducks/game';

const App = ({ player, playTurn }) => {
  const handleClick = () => {
    playTurn(player, 0, 1);
  };

  return (
    <div>
      <h2>Hello Tic Tac Toe!</h2>
      <p>
        Current player is: {player}
      </p>
      <p>
        <button onClick={handleClick}>Make a move</button>
      </p>
    </div>
  );
};

const { number, func } = PropTypes;

App.propTypes = {
  player: number.isRequired,
  playTurn: func.isRequired
};

// the state here is the state that is in the store
// we will use the gameState, which we exported from our 
// game duck's index.js file to map to properties in this component
const mapStateToProps = (state) => {
  const { gameState } = state;

  return {
    player: gameState.player,
    winner: gameState.winner
  }
};

// we also add operations to this component's props so we can call it 
// in the click event
const mapDispatchToProps = {
  playTurn: gameOperations.playTurn
};

export default connect(mapStateToProps, mapDispatchToProps)(App);