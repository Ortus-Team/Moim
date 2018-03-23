import React from 'react';
import { EventItemSmall } from '../EventItemSmall';

export class YourEvents extends React.Component {
  render() {
    return (
      <div className="dashboardEvents">
        <h5 className='subheading'>Your Events</h5>
        <div className="yourEvents">
          
          <div className='eventItem'><EventItemSmall /></div>
          <div className='eventItem'><EventItemSmall /></div>
          <EventItemSmall />
        </div>
      </div>
    );
  }
}
