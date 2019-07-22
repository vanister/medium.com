import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const GameoverDialog = ({ fullScreen, open, isDraw, player, onClick, onClose }) => {
  const title = isDraw ? 'Draw!' : `Player - ${player} wins!`;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title">

      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Would you like to start a new game?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClick(false)} color="secondary">
          No
      </Button>
        <Button onClick={() => onClick(true)} color="primary" autoFocus>
          Yes
      </Button>
      </DialogActions>
    </Dialog>
  );
};

const { func, bool, number } = PropTypes;

GameoverDialog.propTypes = {
  fullScreen: bool.isRequired,
  open: bool.isRequired,
  isDraw: bool.isRequired,
  player: number.isRequired,
  onClick: func.isRequired,
  onClose: func.isRequired
};

export default withMobileDialog()(GameoverDialog);