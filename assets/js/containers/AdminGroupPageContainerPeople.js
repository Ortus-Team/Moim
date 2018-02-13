import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/admingroup/GroupHeader';
import { GroupContentNav } from '../components/admingroup/GroupContentNav';
// import { GroupContent } from '../components/group/GroupContent';
//import { GroupContentEvents } from '../components/group/GroupContentEvents';
import { GroupContentOfficers } from '../components/admingroup/GroupContentOfficers';
import { OfficerItem } from '../components/admingroup/OfficerItem';
import { InviteMember } from '../components/admingroup/InviteMember';
// import { GroupContentGallery } from '../components/group/GroupContentGallery';

export class AdminGroupPageContainerPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleInviteOfficer: {
        display: 'none'
      },
      styleInviteMember: {
        display: 'none'
      }
    };
    this.memberOn = this.memberOn.bind(this);
    this.memberOff = this.memberOff.bind(this);
    this.officerOn = this.officerOn.bind(this);
    this.officerOff = this.officerOff.bind(this);
  }
  
  memberOn() {
    const styleInviteMember = { display: 'block' };
    this.setState({ styleInviteMember });
  }

  memberOff() {
    document.removeEventListener("click", this.memberOff);
    const styleInviteMember = { display: 'none' };
    this.setState({ styleInviteMember });
  }

  officerOn() {
    const styleInviteOfficer = { display: 'block' };
    this.setState({ styleInviteOfficer });
  }

  officerOff() {
    document.removeEventListener("click", this.officerOff);
    const styleInviteOfficer = { display: 'none' };
    this.setState({ styleInviteOfficer });
  }

  render() {
    return (
      <div className='groupPageWrapper'>
        <div className='displayInviteMember' style={this.state.styleInviteMember}>
          <InviteMember off={this.memberOff} />
        </div>
        <Navbar />
        <div className='groupPageContent'>
          <GroupHeader />
          <GroupContentNav />
          <div className='groupPageContentWidth'>
             <div className='adminGroupContentOfficers'>
                <div className='adminGroupContentOfficersWrapper'>
                    <div className="adminGroupContentOfficersContent">
                        <div className="adminGroupPageOfficers">
                            <div className='adminTitle'>
                                <div className='OMain'>
                                    <h3 className='subheading'>Officers</h3>
                                </div>
                                <div className='aInvite'>
                                    <h5>Invite New Officer</h5>
                                </div>
                            </div>
                            <div className="adminGroupUpcomingOfficers">
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                            </div>
                        </div>
                        <div className="adminGroupPageMembers">
                            <div className='adminTitle'>
                                <div className='aMain'>
                                    <h3 className='subheading'>Members</h3>
                                </div>
                                <div className='aInvite'>
                                    <a href='javascript:void(0)' onClick={this.memberOn}><h5>Invite New Member</h5></a>
                                </div>
                            </div>
                            <div className="adminGroupPageMembersList">
                                <div className='adminGroupPageMemberListHeading'>
                                    <div className="adminGroupPageMemberLHName">
                                        <p>Name</p>
                                    </div>
                                    <div className='adminGroupPageMemberLHEmail'>
                                        <p>Email</p>
                                    </div>
                                    <div className='adminGroupPageMemberLHStatus'>
                                        <p>Student Status</p>
                                    </div>
                                    <div className='adminGroupPageMemberLHMajor'>
                                        <p>Major</p>
                                    </div>
                                    <div className='adminGroupPageMemberLHJoined'>
                                        <p>Joined Group</p>
                                    </div>
                                </div>
                                <div className="adminGroupPageMemberListItem">
                                    <div className="adminGroupPageMemberLIName">
                                        <p>Tony Stark</p>
                                        <p>토니 스타크</p>
                                    </div>
                                    <div className='adminGroupPageMemberLIEmail'>
                                        <p>ironman@uw.edu</p>
                                    </div>
                                    <div className='adminGroupPageMemberLIStatus'>
                                        <p>UW Alumni</p>
                                    </div>
                                    <div className='adminGroupPageMemberLIMajor'>
                                        <p>Electrical Engineering</p>
                                    </div>
                                    <div className='adminGroupPageMemberLIJoined'>
                                        <p>September 2016</p>
                                    </div>
                                </div>
                            </div>
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