import React from 'react';

import { DynamicContent } from '../components/home/DynamicContent';
import { DirectoryLink } from '../components/home/DirectoryLink';
import { FeaturedGroups } from '../components/home/FeaturedGroups';
import { Explore } from '../components/home/Explore';

import { FeaturedEvents } from '../components/home/FeaturedEvents';
import { Navbar } from '../components/Navbar';

export class HomePageContainer extends React.Component {

  render() {
    return (
      <div className='homeWrapper'>
        <Navbar />
        <div className='homeHeader'>
          <DynamicContent />
          {/*<DirectoryLink />*/}
        </div>
        <div className='homeContent'>
          <FeaturedEvents />
          <FeaturedGroups />
          <Explore />
        </div>
      </div>
    );
  }
};