import React from 'react';
import { Link } from 'react-router';

export class EventItem extends React.Component {
  render() {
    return (
      <div className="eventItemComponent">
        <div className="eventItemWrapper">
          <Link key='event' to='/event'>
            <div className="eventItemContent">
              {/* Image */}
              <div className="eventItemImage">
                <img src="#" alt="image" />
              </div>

              {/* Date */}
              <div className="eventItemText">
                <h3 className="eventItemTitle">Event Title</h3>
                <div className="eventItemHost">
                  <div className="from">
                    <h4>From </h4>
                  </div>
                  <div className="groupLink">
                    <h4>Name of Student Group</h4>
                  </div>
                </div>
                <h4 className="eventItemDate">Oct. 15th @ 6PM • HUB Ballroom</h4>
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
