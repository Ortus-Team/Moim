import React from 'react';
import { Link } from 'react-router';

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
          <div className='homeButtonBarWrapper'>
            <div className='homeButtonBar'>
              <div className='homeButtonBarSubWrapper'>
                <div className='homeButtonText'>
                  <h1 className='title2'>Looking for a new experience?</h1>
                </div>
                <div className='homeButtonWrapper'>
                  <Link key='groups' to='/groups'><button className='homeButton'><h2>Find a Group</h2></button></Link>
                </div>
              </div>
            </div>
          </div>
          {/*<DirectoryLink />*/}
        </div>
        <div className='homeContent'>
          <FeaturedEvents />
          <FeaturedGroups />
        </div>
        <div className='homeContentExploreWrapper'>
          <div className='homeContentExploreBorder'>
            <div className='homeContentExplore'>
              <Explore />
            </div>
          </div>
        </div>
        <div className='footer'>
          This is the footer. Add create moim and about links here.
        </div>
      </div>
    );
  }
};