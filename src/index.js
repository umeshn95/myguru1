import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { transitions, Provider as AlertProvider, positions } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const options = {
  timeout: 5000,
  postitions: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE,
}



ReactDOM.render(
  <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
          <App />
      </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
