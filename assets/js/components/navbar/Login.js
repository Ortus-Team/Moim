import React from 'react';
import { Link } from 'react-router';
import google from './google.png';
import facebook from './facebook.png';
/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class Login extends React.Component {
  render() {
    return (
      <div className='loginWrapper'>
        <div className='overlay' onClick={this.props.off} />
        <div className='loginBox'>
          <div className='loginContent'>
            <h3>Log in to moim</h3>
              <div className='oAuthButtons'>
                <button className='oAuthButton' onClick={this.props.login}><img src={google} height='20' width='20' />Log in with Google</button>
                <button className='oAuthButton' onClick={this.props.login}><img src={facebook} height='20' width='20' />Log in with Facebook</button>
              </div>
            <p>Don't have an account? <a href="javascript:void(0)" className='signup' onClick={this.props.register}>Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  }
};