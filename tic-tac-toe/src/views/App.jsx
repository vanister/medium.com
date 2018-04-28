import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Game from './containers/Game.jsx';

const styles = (theme) => ({
  content: {
    // take into account the app/toolbar 
    paddingTop: theme.mixins.toolbar.minHeight + 10
  }
});

const App = ({ classes }) => {
  return (
    <div>
      <div>
        <header>
          <h2>Tic Tac Toe - Appbar/menu here...</h2>
        </header>
      </div>
      <div className={classes.content}>
        <section>
          <Game />
        </section>
      </div>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);