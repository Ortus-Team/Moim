import React from 'react';
import { Link } from 'react-router';

export class Navbar extends React.Component {

  render() {
    return (
      <div className='moimNav'>
        <div className="navbarComponent">
          <div className="navbarComponentContainer">
            {/* Logo */}
            <div className="navbarLogo">
              <Link key='home' to='/'>moim</Link>
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
              <Link key='dashboard' to='/dashboard'><div className="accountLink" /></Link>
            </div>

            {/*
            <div className="account">
              <div className="accountButtons">
                <a href="javascript:void(0)" className='login' onClick={this.loginOn}>Log In</a>
                <a href="javascript:void(0)" className='signup' onClick={this.registerOn}>Sign up</a>
              </div>
            </div> */}

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
