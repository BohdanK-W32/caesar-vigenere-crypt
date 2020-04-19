import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ title, routes, path }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  let history = useHistory();

  const toggleDrawer = (evt) => {
    if (evt.type === 'keydown' && (evt.key === 'Tab' || evt.key === 'Shift')) return;
    setDrawerIsOpen((state) => !state);
  };

  return (
    <>
      <AppBar position={'fixed'}>
        <Toolbar>
          <IconButton edge={'start'} color={'inherit'} aria-label={'menu'} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant={'h6'}>{title ? title : '404'}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerIsOpen} onClose={toggleDrawer}>
        <div role={'presentation'} onClick={toggleDrawer} onKeyDown={toggleDrawer} style={{ width: 250 }}>
          <List>
            {routes.map((el, idx) => (
              <ListItem button selected={path.includes(el.path)} onClick={() => history.push(el.path)} key={idx}>
                <ListItemIcon>{el.icon}</ListItemIcon>
                <ListItemText primary={el.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
