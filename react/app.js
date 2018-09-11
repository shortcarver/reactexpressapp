import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Button from '@material-ui/core/Button';
import store from "./redux/store"
import LoginPageComponent from './components/LoginPage/LoginPageComponent';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <Provider store={store().store}>
    {/* <PersistGate persistor={store().persistor} > */}
    <LoginPageComponent className="loginPage" />
    {/* </PersistGate> */}
  </Provider>
);
// render the app
render(<MainApp />, document.getElementById('app'));
