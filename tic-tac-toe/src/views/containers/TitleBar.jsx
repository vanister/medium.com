import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import Menu from '../components/Menu.jsx';

import { gameOperations } from '../../state/ducks/game';

// this is from the material-ui site for centering the menu icon
const styles = () => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TitleBar extends Component {
  constructor(props, context) {
    super(props, context);
    
    // since the menu is only used here, we can use local state to 
    // keep track of when it is open or closed
    this.state = { menuOpen: false };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleNewGameClick = this.handleNewGameClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: true });
  }

  handleMenuClose() {
    this.setState({ menuOpen: false });
  }

  handleNewGameClick(itemKey) {
    if (itemKey === 'new') {
      this.props.newGame();
    }

    this.setState({ menuOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { menuOpen } = this.state;

    return (
      // basicly the default template sample for the title bar with a menu icon
      // from material-ui demo site
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleMenuClick}>
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit">
              Tic Tac Toe
          </Typography>
          </Toolbar>
        </AppBar>
        <Menu open={menuOpen} onItemClick={this.handleNewGameClick} onClose={this.handleMenuClose} />
      </div>
    );
  }
}

const { object, func } = PropTypes;

TitleBar.propTypes = {
  classes: object.isRequired,
  newGame: func.isRequired
};

const mapDispatchToProps = {
  newGame: gameOperations.newGame
};

const styledTitleBar = withStyles(styles)(TitleBar);

export default connect(null, mapDispatchToProps)(styledTitleBar);
