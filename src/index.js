import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import {reducers} from './reducers';

const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  

  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById("root")
  );