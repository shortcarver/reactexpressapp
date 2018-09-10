import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class LoginPageComponent extends Component {
  render() {
    return (
      <div>
        <TextField
          id="name"
          label="Name"
          // className={classes.textField}
          // value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          // className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <Button variant="raised">Login</Button>
      </div>
    );
  }
}