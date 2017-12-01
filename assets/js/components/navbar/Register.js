import React from 'react';
import FacebookLogin from 'react-facebook-login';

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
  }

  render() {
    return (
        <div className='registerWrapper'>
          <div className='overlay' onClick={this.props.off} />
          <div className='registerBox'>
            <div className='registerContent'>
              <h3>Sign up</h3>
              <FacebookLogin
                appId="168701917052804"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.handleFbLogin}
              />
              <p>Already have an account? <a href="javascript:void(0)" className='login' onClick={this.props.login}>Log in</a></p>
            </div>
          </div>
        </div>
    );
  }
};