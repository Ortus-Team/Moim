import React from 'react';

import { EventItemSmall } from '../EventItemSmall';

// eventImg
import eventImg from './event_poster.jpg';

var eventName = 'Dead Poetry: SDHS Open Mic Night';
var groupName = 'Name of Student Group';
var eventDate = 'Nov. 14th @ 5PM';
var eventLoc = 'SDHS Auditorium';

export class Events extends React.Component {
  render() {
    return (
      <div className="dirSectionWrapper">
        <div className="topStudentGroups">
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
        <div className="studentGroups">
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
        <div className="studentGroups">
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
      </div>
    );
  }
};