import React from 'react';
import { EventItem } from '../EventItem';


export class FeaturedEvents extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <h2 className='homeSection'>Upcoming Events</h2>
        <div className="featuredEvents">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
      </div>
    );
  }
}
