import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class HomePageComponent extends Component {
  static propTypes = {
    history: PropTypes.object,
  }

  static defaultProps = {
    history: { push: () => { } },
  }

  signUpOnClick = () => {
    this.props.history.push('/signup');
  }

  loginOnClick = () => {
    this.props.history.push('/login');
  }

  render = () => (
    <div>
      <h1>Home!</h1>
      <p>Marketing stuff goes here. We do stuff for you, so that you will give us money.</p>
      <div>
        <Button variant="raised" onClick={this.signUpOnClick}>SignUp</Button>
        <Button variant="raised" onClick={this.loginOnClick}>Login</Button>
      </div>
    </div>
  )
}
