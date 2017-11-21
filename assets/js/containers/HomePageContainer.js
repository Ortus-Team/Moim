import React from 'react';

import { DynamicContent } from '../components/home/DynamicContent';
import { DirectoryLink } from '../components/home/DirectoryLink';
import { FeaturedGroups } from '../components/home/FeaturedGroups';
import { Explore } from '../components/home/Explore';

import { UpcomingEvents } from '../components/UpcomingEvents';
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
          <UpcomingEvents />
          <FeaturedGroups />
          <Explore />
        </div>
        {/*
        <Navbar />
        <div className='homeContent2'>
          <DynamicContent />
          <UpcomingEvents />
          <FeaturedGroups />
          <Explore />
        </div> */}
      </div>
    );
  }
};