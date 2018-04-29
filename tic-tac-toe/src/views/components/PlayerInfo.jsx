import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

const PlayerInfo = ({ player, gameover }) => {

  return (
    <div>
      <Typography variant="headline">
        {gameover && "Gameover!"}
        {!gameover && `Player: ${player}`}
      </Typography>
    </div>
  );
};

const { number, bool } = PropTypes;

PlayerInfo.propTypes = {
  player: number.isRequired,
  gameover: bool.isRequired
};

export default PlayerInfo;