import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {  createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { appReducer } from './reducers';
import mySaga from './sagas'


export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export  function configureStore() {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    appReducer(history),
    composeEnhancer(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      ),
    ),
  )

  sagaMiddleware.run(mySaga);
  return store
}

export const store = configureStore();

