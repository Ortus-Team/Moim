import React from 'react';
import { Link } from 'react-router';
import eventImage from './event_poster.jpg';

export class EventItemSmall extends React.Component {
  render() {
    return (
      <div className="eventItemSmallComponent">
        <div className="eventItemSmallWrapper">
          <Link key='event' to='/event'>
            <div className="eventItemSmallContent">
              {/* Image */}
              <div className="eventItemSmallImage">
                <img src={eventImage} alt="image" />
              </div>

              {/* Date */}
              <div className="eventItemSmallText">
                <h3 className="eventItemSmallTitle">Dead Poetry: SDHS Open Mic Night</h3>
                <div className="eventItemSmallHost">
                  <div className="from">
                    <h4>From </h4>
                  </div>
                  <div className="groupLink">
                    <Link key='group-home' to='/group-home'><h4>Name of Student Group</h4></Link>
                  </div>
                </div>
                <h4 className="eventItemSmallDate">Nov. 14th @ 5PM • SDHS Auditorium</h4>
                {/* <h4 className="eventItemSmallLoc">- Location</h4> */}
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
