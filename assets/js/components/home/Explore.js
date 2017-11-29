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
      <div className="sectionWrapper">
        <h2 className='subheading'>Find your niche</h2>
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