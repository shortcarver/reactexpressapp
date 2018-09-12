import React, { Component } from 'react';
import Login from '../Login/Login';
import styles from './styles';

export default class LoginPageComponent extends Component {
  render = () => (
    <div style={styles.page}>
      <center><h1 style={styles.title}>MyApp</h1></center>
      <Login style={styles.login} />
    </div>
  );
}
