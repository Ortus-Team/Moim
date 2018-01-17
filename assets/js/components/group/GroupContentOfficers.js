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
                            <div className='groupPageMemberListHeading'>
                                <div className="groupPageMemberLHName">
                                    <p>Name</p>
                                </div>
                                <div className='groupPageMemberLHEmail'>
                                    <p>Email</p>
                                </div>
                                <div className='groupPageMemberLHStatus'>
                                    <p>Student Status</p>
                                </div>
                                <div className='groupPageMemberLHMajor'>
                                    <p>Major</p>
                                </div>
                                <div className='groupPageMemberLHJoined'>
                                    <p>Joined Group</p>
                                </div>
                            </div>
                            <div className="groupPageMemberListItem">
                                <div className="groupPageMemberLIName">
                                    <p>Tony Stark</p>
                                    <p>토니 스타크</p>
                                </div>
                                <div className='groupPageMemberLIEmail'>
                                    <p>ironman@uw.edu</p>
                                </div>
                                <div className='groupPageMemberLIStatus'>
                                    <p>UW Alumni</p>
                                </div>
                                <div className='groupPageMemberLIMajor'>
                                    <p>Electrical Engineering</p>
                                </div>
                                <div className='groupPageMemberLIJoined'>
                                    <p>September 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};