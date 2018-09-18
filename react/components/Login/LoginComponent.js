import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

if (module.hot) {
  module.hot.accept();
}

export default class LoginComponent extends Component {
  static propTypes = {
    style: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    password: '',
  }

  loginOnClick = (args) => {
    console.log(this.state);
    this.props.login(this.state.name, this.state.password);
  }

  singupOnClick = () => {
    // this.props.signUp(this.state.name, this.state.password);
    this.props.history.push('/signup');
  }

  nameOnChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({ name: value }));
  }

  passwordOnChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({ password: value }));
  }

  render = () => {
    const { style = {} } = this.props;
    return (
      <div style={{ ...styles.container, ...style }}>
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
          <Button variant="raised" onClick={this.loginOnClick}>Login</Button>
        </div>
      </div>
    );
  }
}
