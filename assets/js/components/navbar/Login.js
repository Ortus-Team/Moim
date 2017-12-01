import React from 'react';
import { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';


/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
  <button className='loginGoogle' onClick={this.props.login}>Log in with Facebook</button>
*/

export class Login extends React.Component {

  handleFacebookLogin(response) {
    console.log("FACEBOOK LOGIN TOKEN");
    console.log(response);
  }

  render() {
    return (
      <div className='loginWrapper'>
        <div className='overlay' onClick={this.props.off} />
        <div className='loginBox'>
          <div className='loginContent'>
            <h3>Log in to moim</h3>
            
            <FacebookLogin
              appId="168701917052804"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.handleFacebookLogin}
            />
            <p>Don't have an account? <a href="javascript:void(0)" className='signup' onClick={this.props.register}>Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  }

};