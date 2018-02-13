import React from 'react';
import { Link } from 'react-router';

import { Login } from './Login';
import { Register } from './Register';

export class LoggedOut extends React.Component {

  render() {
    return (
      <div className="account">
        <div className="accountButtons">
          <div className='login'>
            <a href="javascript:void(0)" className='loginLink' onClick={this.props.loginOn}><h6>Log In</h6></a>
          </div>
          {/*<div className='signup'>
            <a href="javascript:void(0)" className='signupLink' onClick={this.props.registerOn}><h6>Sign up</h6></a>
          </div>*/}
          <button href="javascript:void(0)" className='signupLink' onClick={this.props.registerOn}><h6>Sign up</h6></button>
        </div>
      </div>
    );
  }
}
