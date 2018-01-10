import React from 'react';

import { OfficerItem } from './OfficerItem';

export class GroupContentOfficers extends React.Component {
  render() {
    return (
        <div className='groupContentOfficers'>
            <div className='groupContentOfficersWrapper'>
                <div className="groupContentOfficersContent">
                    <div className="groupPageOfficers">
                        <h3 className='subheading'>Officers</h3>
                        <div className="groupUpcomingOfficers">
                            <OfficerItem />
                            <OfficerItem />
                            <OfficerItem />
                            <OfficerItem />
                            <OfficerItem />
                            <OfficerItem />
                        </div>
                    </div>
                    <div className="groupPageMembers">
                        <h3 className='subheading'>Members</h3>
                        <div className="groupPageMembersList">
                            <div className="groupPageMemberListItem">
                                <div className="groupPageMemberLIName">
                                    <h2>Name</h2>
                                    <h3>Alternative name</h3>
                                </div>
                                <h2>Year in school</h2>
                                <h3>Other detail</h3>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};