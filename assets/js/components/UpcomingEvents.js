import React from 'react';
// import { EventItem } from 'components/EventItem/EventItem';
import { EventItemSmall } from './EventItemSmall';

export class UpcomingEvents extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <h2 className='subheading'>Upcoming Events</h2>
        <div className="upcomingEvents">
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
