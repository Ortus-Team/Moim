import React from 'react';
import { Link } from 'react-router';

import { Login } from './Login';
import { Register } from './Register';

export class LoggedOut extends React.Component {

  render() {
    return (
      <div className="account">
        <div className="accountButtons">
          <a href="javascript:void(0)" className='login' onClick={this.props.loginOn}>Log In</a>
          <a href="javascript:void(0)" className='signup' onClick={this.props.registerOn}>Sign up</a>
        </div>
      </div>
    );
  }
}
