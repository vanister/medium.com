import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = (theme) => ({
  icon: {
    fontSize: '2em' // double the size of the square's font size
  }
});

const playerIcon = (player) => {
  // these are icon names from https://material.io/icons/
  // you can pick whichever you want, but I chose two that 
  // closely resembles X and O
  switch (player) {
    case 1:
      return 'clear'; // X
    case 2:
      return 'panorama_fish_eye'; // O
    default:
      return '';
  }
};

// the Square is just a square on the game board, it will have nothing, an X or an O depending 
// on which player has marked the square
const Square = ({ classes, player }) => {
  // 'player' is the player, or none, that marked this Square
  return (
    <Icon className={classes.icon}>{playerIcon(player)}</Icon>
  );
};

const { object, number } = PropTypes;

Square.propTypes = {
  classes: object.isRequired,
  player: number.isRequired
};

export default withStyles(styles)(Square);