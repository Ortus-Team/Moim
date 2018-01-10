import React from 'react';
// import { EventItem } from 'components/EventItem/EventItem';
import { EventItemSmall } from '../EventItemSmall';

export class YourEvents extends React.Component {
  render() {
    return (
      <div className="dashboardEvents">
        <h5 className='subheading'>Your Events</h5>
        <div className="yourEvents">
          <EventItemSmall />
          <EventItemSmall />
          <EventItemSmall />
        </div>
      </div>
    );
  }
}
