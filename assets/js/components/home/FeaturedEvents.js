import React from 'react';
import { EventItem } from '../EventItem';
import { EventItemSmall } from '../EventItemSmall';

// eventImg
import eventImg from './event_poster.jpg';

var eventName = 'Dead Poetry: SDHS Open Mic Night';
var groupName = 'Name of Student Group';
var eventDate = 'Nov. 14th @ 5PM';
var eventLoc = 'SDHS Auditorium';

export class FeaturedEvents extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <div className='homeSectionSeeAll'>
          <h2 className='homeSection'>Upcoming Events</h2>
          <h3 className='seeAll'>See all</h3>
        </div>
        <div className="featuredEvents">
        <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
      </div>
    );
  }
}
