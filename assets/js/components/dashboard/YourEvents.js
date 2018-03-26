import React from 'react';
import { EventItemSmall } from '../EventItemSmall';

// eventImg
import eventImg from './event_poster.jpg';

var eventName = 'Dead Poetry: SDHS Open Mic Night';
var groupName = 'Name of Student Group';
var eventDate = 'Nov. 14th @ 5PM';
var eventLoc = 'SDHS Auditorium';

export class YourEvents extends React.Component {
  render() {
    return (
      <div className="dashboardEvents">
        <h5 className='subheading'>Your Events</h5>
        <div className="yourEvents">
          
          <div className='eventItem'><EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} /></div>
          <div className='eventItem'><EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} /></div>
          <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
      </div>
    );
  }
}
