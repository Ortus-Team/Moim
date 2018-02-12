import React from 'react';

import { Category } from './Category';
/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class Explore extends React.Component {
  render() {
    return (
      <div className="exploreSectionWrapper">
        <h1 className='title'>Find your niche</h1>
        <div className="expContent">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
        <div className="expContent">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
         <div className="expContent">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    );
  }
};