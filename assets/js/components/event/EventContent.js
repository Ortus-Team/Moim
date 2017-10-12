import React from 'react';
import { styles } from './EventContent.scss';

/*
*/

export class EventContent extends React.Component {
  render() {
    return (
      <div className="eventPageWrapper">
        <div className="eventPageContainer">
          <div className="eventPageImage">
            <img src="#" alt="image" />
          </div>

          <div className="info">
            <div className="overview">
              <h1 className="eventTitle">Event Title</h1>
              <h2 className="whoDaHost">Hosted by Student Group</h2>
            </div>
            <div className="deets">
              <h2 className="dateTime">Date/Time</h2>
              <h2 className="loc">Location</h2>
            </div>
            <div className="rsvp">
              <div className="rsvpButts">
                <button className="going">Going</button>
                <button className="interest">Interested</button>
              </div>
              <div className="rsvpData">
                <h3># Going - # Following</h3>
              </div>
            </div>
            <div className="description">
              <p>Lorem Khaled Ipsum is a major key to success. The key is to drink coconut, fresh coconut,
                trust me. The key to more success is to have a lot of pillows. Find peace, life is like a water fall,
                you’ve gotta flow. Another one. The key to more success is to get a massage once a week, very important,
                major key, cloth talk. It’s on you how you want to live your life. Everyone has a choice. I pick my choice,
                squeaky clean. In life there will be road blocks but we will over come it. The key to more success is
                to get a massage once a week, very important, major key, cloth talk.</p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
