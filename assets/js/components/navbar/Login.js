import React from 'react';
import { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login-component';
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
  <button className='loginGoogle' onClick={this.props.login}>Log in with Facebook</button>
*/

export class Login extends React.Component {

  handleFacebookLogin(response) {
    console.log("FACEBOOK LOGIN TOKEN");
    console.log(response);
  }

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div className='loginWrapper'>
        <div className='overlay' onClick={this.props.off} />
        <div className='loginBox'>
          <div className='loginContent'>
            <h3>Log in to moim</h3>
<<<<<<< HEAD
            
            <FacebookLogin
              appId="168701917052804"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.handleFacebookLogin}
            />

            <GoogleLogin socialId="536753927994-6jcc5jtp350uu2jaj498fo4kldjpl50e.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>

=======
              <div className='oAuthButtons'>
                <button className='oAuthButton' onClick={this.props.login}><img src={google} height='20' width='20' />Log in with Google</button>
                <button className='oAuthButton' onClick={this.props.login}><img src={facebook} height='20' width='20' />Log in with Facebook</button>
              </div>
>>>>>>> origin/yujin
            <p>Don't have an account? <a href="javascript:void(0)" className='signup' onClick={this.props.register}>Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  }

};