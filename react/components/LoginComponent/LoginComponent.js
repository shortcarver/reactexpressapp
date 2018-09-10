import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles.js';

if (module.hot) {
  module.hot.accept();
}

export default class LoginComponent extends Component {
  state = {
    name: "",
    password: "",
  }

  loginOnClick = (args) => {
    console.log(this.state);
  }

  singupOnClick = () => {

  }

  nameOnChange = (event) => {
    const value = event.target.value
    this.setState(() => ({ name: value }))
  }

  passwordOnChange = (event) => {
    const value = event.target.value
    this.setState(() => ({ password: value }))
  }

  render = () => {
    return (
      <div style={styles.container}>
        <TextField
          id="name"
          label="Name"
          onChange={this.nameOnChange}
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          onChange={this.passwordOnChange}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <div style={styles.buttonContainer}>
          <Button variant="flat" onClick={this.singupOnClick}>Sign Up</Button>
          <Button variant="raised" onClick={this.loginOnClick} >Login</Button>
        </div>
      </div>
    );
  }
}