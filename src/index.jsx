import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './scss/style.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store'
const Element = document.getElementById('root')


render(
  <Provider store={store}>
      <App />
  </Provider>,
  Element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
