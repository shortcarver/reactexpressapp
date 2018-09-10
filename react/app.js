import React from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import LoginPageComponent from './components/LoginPage/LoginPageComponent';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <LoginPageComponent />
);
// render the app
render(<MainApp />, document.getElementById('app'));
