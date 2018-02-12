import React from 'react';
import { EventItem } from '../EventItem';
import { EventItemSmall } from '../EventItemSmall';


export class FeaturedEvents extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <div className='homeSectionSeeAll'>
          <h2 className='homeSection'>Upcoming Events</h2>
          <h3 className='seeAll'>See all</h3>
        </div>
        <div className="featuredEvents">
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
        </div>
      </div>
    );
  }
}
