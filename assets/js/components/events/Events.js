import React from 'react';

import { EventItem } from '../EventItem';

export class Events extends React.Component {
  render() {
    return (
      <div className="dirSectionWrapper">
        <div className="topStudentGroups">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
        <div className="studentGroups">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
        <div className="studentGroups">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
      </div>
    );
  }
};