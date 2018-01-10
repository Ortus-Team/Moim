import React from 'react';
import google from './google.png';
import facebook from './facebook.png';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  register1
  Translate
*/

export class Register extends React.Component {
  render() {
    return (
        <div className='registerWrapper'>
          <div className='overlay' onClick={this.props.off} />
          <div className='registerBox'>
            <div className='registerContent'>
              <h3>Sign up</h3>
              <div className='oAuthButtons'>
                <button className='oAuthButton' onClick={this.props.login}><img src={google} height='20' width='20' />Sign up with Google</button>
                <button className='oAuthButton' onClick={this.props.login}><img src={facebook} height='20' width='20' />Sign up with Facebook</button>
              </div>
              <p>Already have an account? <a href="javascript:void(0)" className='login' onClick={this.props.login}>Log in</a></p>
            </div>
          </div>
        </div>
    );
  }
};