import React from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import LoginComponent from './components/LoginComponent/LoginComponent';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <LoginComponent className="loginPage"/>
);
// render the app
render(<MainApp />, document.getElementById('app'));
