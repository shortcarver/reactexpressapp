import React from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <Button variant="raised" color="primary">Hellow!</Button>
);
// render the app
render(<MainApp />, document.getElementById('app'));
