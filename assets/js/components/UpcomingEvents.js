import React from 'react';
// import { EventItem } from 'components/EventItem/EventItem';
import { EventItem } from './EventItem';
/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class UpcomingEvents extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <h2 className='subheading'>Upcoming Events</h2>
        <div className="upcomingEvents">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
      </div>
    );
  }
}
