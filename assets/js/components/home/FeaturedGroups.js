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
            <div className='homeSectionSeeAll'>
              <h2 className='homeSection'>Featured Groups</h2>
              <h3 className='seeAll'>See all</h3>
            </div>
            <div className="featuredGroups">
              <StudentGroupItem />
              <StudentGroupItem />
              <StudentGroupItem />
            </div>
        </div>
    );
  }
};