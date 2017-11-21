import React from 'react';

import { StudentGroupItem } from '../StudentGroupItem';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class FeaturedGroups extends React.Component {
  render() {
    return (
        <div className="sectionWrapper">
            <h2 className='subheading'>Featured Groups</h2>
            <div className="featuredGroups">
              <StudentGroupItem />
              <StudentGroupItem />
              <StudentGroupItem />
            </div>
        </div>
    );
  }
};