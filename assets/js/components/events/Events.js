import React from 'react';

import { EventItemSmall } from '../EventItemSmall';

export class Events extends React.Component {
  render() {
    return (
      <div className="dirSectionWrapper">
        <div className="topStudentGroups">
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
        </div>
        <div className="studentGroups">
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
        </div>
        <div className="studentGroups">
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
        </div>
      </div>
    );
  }
};