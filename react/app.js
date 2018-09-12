import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import LoginPage from './components/LoginPage/LoginPage';
import UserCreatePage from './components/UserCreatePage/UserCreatePage';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <Provider store={store().store}>
    {/* <PersistGate persistor={store().persistor} > */}
    <Router>
      <Switch>
        <Route exact path="/" component={UserCreatePage} />
        <Route exact path="/singup" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
    {/* </PersistGate> */}
  </Provider>
);
// render the app
render(<MainApp />, document.getElementById('app'));
