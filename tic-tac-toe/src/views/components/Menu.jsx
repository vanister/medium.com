import React from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const Menu = ({ open, onItemClick, onClose }) => {

  return (
    <Drawer open={open} onClose={onClose} anchor="top">
      <List>
        <ListItem button onClick={() => onItemClick('new')}>
          <ListItemIcon>
            <Icon>fiber_new</Icon>
          </ListItemIcon>
          <ListItemText>New game</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

const { func, bool } = PropTypes;

Menu.propTypes = {
  open: bool.isRequired,
  onItemClick: func.isRequired,
  onClose: func.isRequired
};

export default Menu;