import React from 'react';

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
            <h2>Log in to mo-im</h2>
            <button className='loginGoogle'>Log in with Google</button>
            <h3>Don't have an account? <a href="javascript:void(0)" className='signup' onClick={this.props.register}>Sign Up</a></h3>
          </div>
        </div>
      </div>
    );
  }
};