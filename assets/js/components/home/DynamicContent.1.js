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

export class DynamicContent extends React.Component {
  render() {
    return (
        <div className='dynamicWrapper'>
          <div className='dynamicContent'>
            <h1>Dynamic content goes here!</h1>
          </div>
        </div>
    );
  }
};