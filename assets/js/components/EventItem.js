import React from 'react';
import { Link } from 'react-router';
import eventImage from './event_poster.jpg';

export class EventItem extends React.Component {
  render() {
    return (
      <div className="eventItemComponent">
        <div className="eventItemWrapper">
          <Link key='event' to='/event'>
            <div className="eventItemContent">
              {/* Image */}
              <div className="eventItemImage">
                <img src={eventImage} alt="image" />
              </div>

              {/* Date */}
              <div className="eventItemText">
                <h3 className="eventItemTitle">Dead Poetry: SDHS Open Mic Night</h3>
                <div className="eventItemHost">
                  <div className="from">
                    <h4>From </h4>
                  </div>
                  <div className="groupLink">
                    <Link key='group-home' to='/group-home'><h4>Name of Student Group</h4></Link>
                  </div>
                </div>
                <h4 className="eventItemDate">Nov. 14th @ 5PM • SDHS Auditorium</h4>
                {/* <h4 className="eventItemLoc">- Location</h4> */}
                {/* Logo
                <div>
                    <img src="#" alt="logo" />
                </div> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
