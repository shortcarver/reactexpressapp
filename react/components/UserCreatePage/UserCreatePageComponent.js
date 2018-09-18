import React, { Component } from 'react';
import UserEdit from '../UserEdit/UserEdit';
import styles from './styles';


export default class UserCreatePageComponent extends Component {
  render = () => (
    <div style={styles.container}>
      <h1>Sign Up</h1>
      <UserEdit style={styles.useredit} />
    </div>
  );
}
