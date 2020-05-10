import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';

const backgroundColor = "#f5f5f5";
const theme = createMuiTheme({
  palette: {
    background: {
      default: backgroundColor,
    }
  },
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme = { theme }>
      <CssBaseline>
    <Provider store={store}>
      <App />
    </Provider>
    </CssBaseline>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
