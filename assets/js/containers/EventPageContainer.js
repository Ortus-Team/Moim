import React from 'react';
import { Navbar } from '../components/Navbar';
import { EventContent } from '../components/event/EventContent';
import { UpcomingEvents } from '../components/UpcomingEvents';

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
