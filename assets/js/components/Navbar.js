import React from 'react';
import { Link } from 'react-router';

import { LoggedIn } from './navbar/LoggedIn';
import { LoggedOut } from './navbar/LoggedOut';
import { Login } from './navbar/Login';
import { Register } from './navbar/Register';
let isLoggedIn = null;
export class Navbar extends React.Component {

  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: isLoggedIn,
      styleLogin: {
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
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.loginOff);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.loginOff);
      isLoggedIn = this.isLoggedIn;
  }

  // log in and log out

  // Login.js
  handleLoginClick() {
    this.setState({isLoggedIn: true});
    document.removeEventListener("click", this.loginOff);
    const styleLogin = { display: 'none' };
    this.setState({ styleLogin });
  }

  handleFacebookLogin(response) {
    console.log(response);
  }

  /*
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  } */
  
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
    const isLoggedIn = this.state.isLoggedIn;

    let loginControl = null;
    if (isLoggedIn == true) {
      loginControl = <LoggedIn />;
    } else {
      loginControl = <LoggedOut loginOn={this.loginOn} registerOn={this.registerOn} />;
    }

    return (
      <div className='moimNav'>
        <div className='displayLogin' style={this.state.styleLogin}>
          <Login off={this.loginOff} register={this.loginRegister} login={this.handleLoginClick} facebookLogin={this.handleFacebookLogin}/>
        </div>

        <div className='displayRegister' style={this.state.styleRegister}>
          <Register off={this.registerOff} login={this.registerLogin} />
        </div>

        <div className='createMoim'>
          <div className='createMoimTextWrapper'>
            <div className='createMoimText'>
              <h6>Are you the officer of a student group?</h6>
            </div>
            <div className='createMoimButtonWrapper'>
              <Link key='create' to='/create'><h6 className='createGroupText'>Register your group today</h6>{/*<button className='createMoimButton'><h6>Register your group</h6></button>*/}</Link>
            </div>
          </div>
        </div>

        <div className="navbarComponent">
          <div className="navbarComponentContainer">
            {/* Logo */}
            <div className="navbarLogo">
              <Link key='home' to='/'><h2>moim</h2></Link>
            </div>

            {/* Main links */}
            <div className="mainLinks">
              <div className='navSearch'>
                <h6><input type="text" placeholder="Search" /></h6>
              </div>
              <Link key='groups' to='/groups'>
                <div className='navGroups'>
                  <h6 className="navLink">Groups</h6>
                </div>
              </Link>
              <Link key='events' to='/events'>
                <div className='navEvents'>
                  <h6 className="navLink">Events</h6>
                </div>
              </Link>
              <Link key='about' to='/'>
                <div className='navEvents'>
                  <h6 className="navLink">About</h6>
                </div>
              </Link>
              {/* <Link key='translate' to='/'>
                <div className='navTranslate'>
                  <h6 className="navLink">English</h6>
                </div>
              </Link> */}
            </div>

            {/* Account */}
            <div className="account">
              {loginControl}
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
