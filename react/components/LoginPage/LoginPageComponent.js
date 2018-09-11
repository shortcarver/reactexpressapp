import React, { Component } from 'react';
import Login from '../Login/Login';
import styles from './styles';

export default class LoginPageComponent extends Component {
  render = () => (
    <div style={styles.page}>
      <span>Todo, title text here</span>
      <Login style={styles.login} />
    </div>
  );
}
