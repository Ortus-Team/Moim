import React from 'react';

import { EventItemSmall } from '../EventItemSmall';
import { Feed } from './Feed';

export class GroupContent extends React.Component {
  render() {
    return (
        <div className='groupContent'>
            <div className='groupContentWrapper'>
                <div className="groupContentContent">
                    <div className="groupPageTopContent">
                        <div className="groupPageContentLeft">
                            <div className="groupPageAbout">
                                <h3 className='subheading'>About Us</h3>
                                <p className='groupSectionDescription'>{this.props.aboutGroup}</p>
                                <Feed />
                            </div>
                            <div className="groupPageEvent">
                                <h3 className='subheading'>Upcoming Event</h3>
                                <div className="groupUpcomingEvent"><EventItemSmall eventImg={this.props.upcomingEvent} eventName={this.props.eventName} groupName={this.props.groupName} eventDate={this.props.eventDate} eventLoc={this.props.eventLoc} /></div>
                            </div>
                        </div>
                        
                        {/* About Us
                        
                        <div className="groupPageFeed">
                            <h3 className='groupSectionHeading'>Feed</h3>
                            <div className="groupPageFeedContent">
                                <p className='groupSectionDescription'>Nothing yet!</p>
                            </div>
                        </div>
                        
                            */}
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};