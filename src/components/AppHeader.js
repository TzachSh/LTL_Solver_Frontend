import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { TabsMenu } from './TabsMenu';
import Psi from '../Psi.svg';

const iconDim = 64;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: '0.5%',
    width: iconDim,
    height: iconDim,
  },
  appBarSpacer: theme.mixins.toolbar
}));

export function AppHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
            <img className={classes.icon} src={Psi} alt='logo' />
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
        </Toolbar>
        <TabsMenu />
      </AppBar>
    </div>
  );
}