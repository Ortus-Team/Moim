import React from 'react';
import { Link } from 'react-router';

export class EventContent extends React.Component {
  render() {
    return (
      <div className="adminEventPageWrapper">
        <div className="adminEventPageContainer">
          <div className="adminEventPageImage">
            <img src="#" alt="image" />
          </div>

          <div className="info">
            <div className="overview">
              <div className='overviewMainAdmin'>
                <div className='overviewMainText'>
                  <h1 className="adminEventTitle">(Admin) Dead Poetry</h1>
                  <h3 className="whoDaHost">Hosted by <Link key='group-home' to='/group-home'>Name of Student Group</Link></h3>
                </div>
                <div className='overviewMainEdit'>
                  <p><a className='purple' href='#'>Edit Event Details</a></p>
                </div>
              </div>
              <div className="rsvpButts">
                <button className="rsvpButtI">Interested</button>
                <button className="rsvpButtG">Going</button>
                <button className="rsvpButtN">Not going</button>
              </div>
            </div>
            <hr />
            <div className="deets">
              <h4 className="dateTime">November 14 at 5:00PM - 9:00PM</h4>
              <h4 className="loc">SDHS Auditorium, 3F Main Building</h4>
              <h4># Going - # Following</h4>
            </div>
            <hr />
            <div className="description">
              <p>Lorem Khaled Ipsum is a major key to success. The key is to drink coconut,
                fresh coconut, trust me. The key to more success is to
                have alot of pillows. Find peace, life is like a waterfall. Lorem Khaled Ipsum is a major key to success. The key is to drink coconut,
                fresh coconut, trust me. The key to more success is to
                have alot of pillows. Find peace, life is like a waterfall.</p>
              <br />
              <p>Lorem Khaled Ipsum is a major key to success. The key is to drink coconut,
                fresh coconut, trust me. The key to more success is to
                have alot of pillows. Find peace, life is like a waterfall. Lorem Khaled Ipsum is a major key to success. The key is to drink coconut,
                fresh coconut, trust me. The key to more success is to
                have alot of pillows. Find peace, life is like a waterfall.</p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
