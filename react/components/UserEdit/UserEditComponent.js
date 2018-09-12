import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

export default class UserEditComponent extends Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    email: '',
    password: '',
    style: {},
  }

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    favoriteColor: '',
  }

  onInputChange = (name, event) => {
    const { value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  render = () => {
    const { email, password, style } = this.props;
    return (
      <div style={{ ...styles.container, ...style }}>
        <TextField
          label="E-mail"
          margin="normal"
          type="email"
          default={email}
          onChange={event => this.onInputChange('email', event)}
        />
        <TextField
          label="Password"
          default={password}
          onChange={event => this.onInputChange('password', event)}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          label="First Name"
          onChange={event => this.onInputChange('firstName', event)}
          type="text"
          margin="normal"
        />
        <TextField
          label="Last Name"
          onChange={event => this.onInputChange('lastName', event)}
          type="text"
          margin="normal"
        />
        <TextField
          label="Phone Number"
          onChange={event => this.onInputChange('phoneNumber', event)}
          type="tel"
          margin="normal"
        />
        <TextField
          label="Favorite Color"
          onChange={event => this.onInputChange('favoriteColor', event)}
          type="text"
          margin="normal"
        />
      </div>
    );
  }
}
