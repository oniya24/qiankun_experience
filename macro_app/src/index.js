import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import startApp from './microConfig/index';
import "antd/dist/antd.css";


startApp();
ReactDOM.render(
    <App />,
  document.getElementById('root')
);