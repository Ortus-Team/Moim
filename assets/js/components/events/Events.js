/*
  This is temporary code since Event api is not working for some reason
*/



import React from 'react';

import { EventItemSmall } from '../EventItemSmall';
import eventReduce from '../../reducers/EventReducer';
const store = createStore(eventReduce)

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
          for (var i = 0; i < 5; i++) {
            var eName = store.getState().events.title
            var gName = store.getState().events.org
            var date = store.getState().events.event_date
            var location = store.getState().events.location
            <EventItemSmall eventImg={eventImg} eventName={eName} groupName={gName} eventDate={date} eventLoc={location} />
          }
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
        <div className="studentGroups">
          for (var i = 0; i < 5; i++) {
            var eName = store.getState().events.title
            var gName = store.getState().events.org
            var date = store.getState().events.event_date
            var location = store.getState().events.location
            <EventItemSmall eventImg={eventImg} eventName={eName} groupName={gName} eventDate={date} eventLoc={location} />
          }
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
          // <EventItemSmall eventImg={eventImg} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc} />
        </div>
        <div className="studentGroups">
          for (var i = 0; i < 5; i++) {
            var eName = store.getState().events.title
            var gName = store.getState().events.org
            var date = store.getState().events.event_date
            var location = store.getState().events.location
            <EventItemSmall eventImg={eventImg} eventName={eName} groupName={gName} eventDate={date} eventLoc={location} />
          }
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