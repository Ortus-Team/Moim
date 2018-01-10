import React from 'react';
// import { EventItem } from 'components/EventItem/EventItem';
import { EventItemSmall } from '../EventItemSmall';

export class YourEvents extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <h3 className='subheading'>Your Events</h3>
        <hr />
        <div className="yourEvents">
          <EventItemSmall />
        </div>
      </div>
    );
  }
}
