import React from 'react';

import { EventItem } from '../EventItem';

export class GroupContentEvents extends React.Component {
  render() {
    return (
        <div className='groupContentEvents'>
            <div className='groupContentEventsWrapper'>
                <div className="groupContentEventsContent">
                    <div className="groupPageTopContent">
                        <div className="groupPageEvents">
                            <h3 className='groupSectionHeading'>Upcoming Events</h3>
                            <div className="groupUpcomingEvents">
                                <EventItem />
                            </div>
                        </div>
                        <div className="groupPageEvents">
                            <h3 className='groupSectionHeading'>Past Events</h3>
                            <div className="groupPastEvents">
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};