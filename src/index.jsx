import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/app/app.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { compose, legacy_createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../src/services/reducers/index.js';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = legacy_createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
