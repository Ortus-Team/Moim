import React from 'react';
import FacebookLogin from 'moim-react-facebook-login';
import { GoogleLogin } from 'react-google-login-component';
import { getUser } from "../../actions/TokenAction";
import { handleLoginClick } from "../Navbar";
import { hashHistory } from 'react-router';

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

  handleFbLogin(response) {
    console.log("FACEBOOK LOGIN TOKEN");
    console.log(response);
    getUser(response, 1)
      .then(res => {
        if (res.registered == false) {
          console.log("NOT REGISTERED");
          hashHistory.push('/signup1');
        } else {
          console.log("REGISTERED");
        }
      });
  }

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var auth_response = googleUser.getAuthResponse();
    //console.log({accessToken: id_token});
    console.log(auth_response);
    getUser(auth_response.access_token, 0)
      .then(res => {
        if (res.registered == false) {
          console.log("NOT REGISTERED");
        } else {
          console.log("REGISTERED");
        }
      });
  }

  render() {
    return (
        <div className='registerWrapper'>
          <div className='overlay' onClick={this.props.off} />
          <div className='registerBox'>
            <div className='registerContent'>
              <h3>Sign up</h3>
                <div>
                  <FacebookLogin
                    appId="168701917052804"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.handleFbLogin}
                    icon="fa-facebook-square"
                  />
                </div>
                <div>
                  <GoogleLogin socialId="536753927994-6jcc5jtp350uu2jaj498fo4kldjpl50e.apps.googleusercontent.com"
                       className="google-login"
                       scope="profile"
                       fetchBasicProfile={true}
                       responseHandler={this.responseGoogle}
                       buttonText="Login With Google"/>
                </div>
              <p>Already have an account? <a href="javascript:void(0)" className='login' onClick={this.props.login}>Log in</a></p>
            </div>
          </div>
        </div>
    );
  }
};