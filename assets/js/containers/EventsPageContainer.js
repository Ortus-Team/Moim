import React from 'react';

import { Navbar } from '../components/Navbar';
import { DirectoryHeader } from '../components/events/DirectoryHeader';
import { Filters } from '../components/events/Filters';
import { Events } from '../components/events/Events';

export class EventsPageContainer extends React.Component {
  render() {
    return (
      <div className='dirWrapper'>  
        <Navbar />
        {/* <div className='dirHeader'>
          <DirectoryHeader />
        </div> */}
        <div className='dirFilters'>
          <Filters />
        </div>
        <div className='dirContent'>
          <Events />
        </div>
      </div>
    );
  }
};