import React from 'react';
import { Link } from 'react-router';

import { Login } from './home/Login';
import { Register } from './home/Register';

export class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        styleLogin : {
          display: 'none'
        },
        
        styleRegister: {
          display: 'none'
        }
    };
    this.loginOn = this.loginOn.bind(this);
    this.loginOff = this.loginOff.bind(this);
    this.registerOn = this.registerOn.bind(this);
    this.registerOff = this.registerOff.bind(this);
    this.registerLogin = this.registerLogin.bind(this);
    this.loginRegister = this.loginRegister.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.loginOff);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.loginOff);
  }
  
  // log in display functions
  loginOn() {
    const styleLogin = { display: 'block' };
    this.setState({ styleLogin });
    // document.addEventListener("click", this.loginOff);
  }

  loginOff() {
    document.removeEventListener("click", this.loginOff);
    const styleLogin = { display: 'none' };
    this.setState({ styleLogin });
  } 

  // register display functions
  registerOn() {
    const styleRegister = { display: 'block' };
    this.setState({ styleRegister });
    // document.addEventListener("click", this.registerOff);
  }

  registerOff() {
    // document.removeEventListener("click", this.registerOff);
    const styleRegister = { display: 'none' };
    this.setState({ styleRegister });
  } 

  registerLogin() {
    const styleRegister = { display: 'none' };
    this.setState({ styleRegister });
    const styleLogin = { display: 'block' };
    this.setState({ styleLogin });
  }

  loginRegister() {
    const styleLogin = { display: 'none' };
    this.setState({ styleLogin });
    const styleRegister = { display: 'block' };
    this.setState({ styleRegister });
  }

  render() {
    return (
      <div className='moimNav'>
        <div className='displayLogin' style={this.state.styleLogin}>
          <Login off={this.loginOff} register={this.loginRegister} />
        </div>

        <div className='displayRegister' style={this.state.styleRegister}>
          <Register off={this.registerOff} login={this.registerLogin} />
        </div>

        <div className="navbarComponent">
          <div className="navbarComponentContainer">
            {/* Logo */}
            <div className="navbarLogo">
              <Link key='home' to='/'>Logo</Link>
            </div>

            {/* Search
            <div className='search'>
                <a href="#">Search</a>
            </div> */}

            {/* Main links */}
            <div className="mainLinks">
              <a href="#">Search</a>
              <Link key='groups' to='/groups'>Student Group Directory</Link>
              <Link key='events' to='/events'>Events</Link>
            </div>

            {/* Account */}
            <div className="account">
              <a href="javascript:void(0)" className='login' onClick={this.loginOn}>Log In</a>
              <a href="javascript:void(0)" className='signup' onClick={this.registerOn}>Sign up</a>
            </div>

            {/* Translate
                  <div className='translate'>
                      <a href="#">Translate</a>
                  </div> */}
          </div>
        </div>
      </div>
    );
  }
}
