import React from 'react';

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
              <h2>Sign up</h2>
              <button className='registerGoogle'>Sign up with Google</button>
              <h3>Already have an account? <a href="javascript:void(0)" className='login' onClick={this.props.login}>Log in</a></h3>
            </div>
          </div>
        </div>
    );
  }
};