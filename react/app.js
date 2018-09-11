import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import LoginPage from './components/LoginPage/LoginPage';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <Provider store={store().store}>
    {/* <PersistGate persistor={store().persistor} > */}
    <LoginPage className="loginPage" />
    {/* </PersistGate> */}
  </Provider>
);
// render the app
render(<MainApp />, document.getElementById('app'));
