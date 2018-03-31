import React from 'react';
import { Link } from 'react-router';

export class EventItemSmall extends React.Component {
  render() {
    return (
      <div className="eventItemSmallComponent">
        <div className="eventItemSmallWrapper">
          <Link key='event' to='/event'>
            <div className="eventItemSmallContent">
              {/* Image */}
              <div className="eventItemSmallImage">
                <img src={this.props.eventImg} alt="image" />
              </div>

              {/* Date */}
              <div className="eventItemSmallText">
                <h3 className="eventItemSmallTitle">{this.props.eventName}</h3>
                <div className="eventItemSmallHost">
                  <div className="from">
                    <h5>From </h5>
                  </div>
                  <div className="groupLink">
                    <Link key='group-home' to='/group-home'><h5>{this.props.groupName}</h5></Link>
                  </div>
                </div>
                <h5 className="eventItemSmallDate">{this.props.eventDate}</h5>
                <h5 className="eventItemSmallDate">{this.props.eventLoc}</h5>
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
