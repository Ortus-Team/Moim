import React from 'react';

import { EventItemSmall } from '../EventItemSmall';

export class GroupContentEvents extends React.Component {
  render() {
    return (
        <div className='groupContentEvents'>
            <div className='groupContentEventsWrapper'>
                <div className="groupContentEventsContent">
                    <div className="groupPageTopContent">
                        <div className="groupPageEvents">
                            <h3 className='subheading'>Upcoming Events</h3>
                            <div className="groupUpcomingEvents">
                                <EventItemSmall />
                            </div>
                        </div>
                        <div className="groupPageEvents">
                            <h3 className='subheading'>Past Events</h3>
                            <div className="groupPastEvents">
                                <EventItemSmall />
                                <EventItemSmall />
                                <EventItemSmall />
                                <EventItemSmall />
                                <EventItemSmall />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};