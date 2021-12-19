import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import i18n from './utils/i18n/i18n'
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux'; 
import { store } from './store/store';
import { compose } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/store';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


ReactDOM.render(
  <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App  />
        </ConnectedRouter>
      </Provider>
  </I18nextProvider>,

  document.getElementById('root')
);

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
