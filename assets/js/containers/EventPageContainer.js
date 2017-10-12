import React from 'react';
import { Navbar } from '../components/event/Navbar';
import { EventContent } from '../components/event/EventContent';
import { UpcomingEvents } from '../components/event/UpcomingEvents';

/*
Event Page
  NavBar
  Content
    Breadcrumbs?
    Event Info
      Date
      Image
      Title
      Student Group
      Location
      Description
      RSVP
        Going
        Following
    Related Events
      Event Items
*/

export class EventPageContainer extends React.Component {
  render() {
    return (
      <div className="eventPageWrapper">
        <Navbar />
        <div className="eventPageContent">
          <EventContent />
          <UpcomingEvents />
        </div>
      </div>
    );
  }
}
