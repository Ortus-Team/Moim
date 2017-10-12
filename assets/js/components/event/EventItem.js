import React from 'react';

/*
Event Item (*S*)
  Date
  Image
  Title
  Student Group
  Location
  Short Description?
*/

export class EventItem extends React.Component {
  render() {
    return (
      <div className="event">
        <div className="eventWrapper">
          <div className="eventContent">
            {/* Image */}
            <div className="eventImage">
              <img src="#" alt="image" />
            </div>

            {/* Date */}
            <div className="eventText">
              <h3 className="eventTitle">Event Title</h3>
              <div className="eventHost">
                <div className="from">
                  <h4>From </h4>
                </div>
                <div className="groupLink">
                  <h4>Name of Student Group</h4>
                </div>
              </div>
              <h4 className="eventDate">Date/Time</h4>
              {/* <h4 className="eventLoc">- Location</h4> */}
              {/* Logo
                        <div>
                            <img src="#" alt="logo" />
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
