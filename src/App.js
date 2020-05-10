import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppHeader } from './components/AppHeader';
import {Notification} from './components/Notification';
import { TabsContentHandler } from './components/TabsContentHandler';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  contentAlignment: {
    marginTop: theme.spacing(9),
  }
}));

const appTitle = 'LTL Fast Satisfiability Checker';
function App() {
  const classes = useStyles();
  const notificationsState = useSelector(state => state.notifications);

  return (
    <div className="App">
      <AppHeader title={appTitle} />
      <div className={classes.appBarSpacer} />
      <Container className={classes.contentAlignment} maxWidth='lg'>
        <TabsContentHandler />
      </Container>
      {notificationsState.isShown &&
        <Notification message={notificationsState.message.text} severity={notificationsState.message.severity} />
      }
    </div>
  );
}

export default App;
