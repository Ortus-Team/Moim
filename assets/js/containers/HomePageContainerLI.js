import React from 'react';

import { DynamicContent } from '../components/home/DynamicContent';
import { FeaturedGroups } from '../components/home/FeaturedGroups';
import { Explore } from '../components/home/Explore';

import { UpcomingEvents } from '../components/UpcomingEvents';
import { Navbar } from '../components/Navbar';

export class HomePageContainerLI extends React.Component {

  render() {
    return (
      <div className='homeWrapper'>
        <Navbar />
        <div className='homeHeader'>
          <DynamicContent />
        </div>
        <div className='homeContent'>
          <UpcomingEvents />
          <FeaturedGroups />
          <Explore />
        </div>
      </div>
    );
  }
};