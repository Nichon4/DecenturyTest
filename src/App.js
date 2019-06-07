import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import './App.css';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers/reducers";
import rootSaga from './sagas/'

import {Container} from "./components/container";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container/>
      </div>
    </Provider>
  );
}

export default App;
