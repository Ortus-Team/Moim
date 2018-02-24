import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/admingroup/GroupHeader';
import { GroupContentNav } from '../components/admingroup/GroupContentNav';
// import { GroupContent } from '../components/group/GroupContent';
//import { GroupContentEvents } from '../components/group/GroupContentEvents';
import { GroupContentOfficers } from '../components/admingroup/GroupContentOfficers';
import { OfficerItem } from '../components/admingroup/OfficerItem';
import { InviteMember } from '../components/admingroup/InviteMember';
import { InviteMemberConfirm } from '../components/admingroup/InviteMemberConfirm';
import { InviteOfficer } from '../components/admingroup/InviteOfficer';
import { InviteOfficerConfirm } from '../components/admingroup/InviteOfficerConfirm';

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
      },
      styleInviteMemberConfirm: {
        display: 'none'
      },
      styleInviteOfficerConfirm: {
        display: 'none'
      }
    };
    this.memberOn = this.memberOn.bind(this);
    this.memberOff = this.memberOff.bind(this);
    this.officerOn = this.officerOn.bind(this);
    this.officerOff = this.officerOff.bind(this);
    this.inviteMemberConfirm = this.inviteMemberConfirm.bind(this);
    this.inviteMemberConfirmOn = this.inviteMemberConfirmOn.bind(this);
    this.inviteMemberConfirmOff = this.inviteMemberConfirmOff.bind(this);   
    this.inviteOfficerConfirm = this.inviteOfficerConfirm.bind(this);
    this.inviteOfficerConfirmOn = this.inviteOfficerConfirmOn.bind(this);
    this.inviteOfficerConfirmOff = this.inviteOfficerConfirmOff.bind(this);   
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

  inviteMemberConfirm() {
    const styleInviteMember = { display: 'none' };
    this.setState({ styleInviteMember});
    const styleInviteMemberConfirm = { display: 'block' };
    this.setState({ styleInviteMemberConfirm });
  }

  inviteMemberConfirmOff() {
    document.removeEventListener("click", this.inviteMemberConfirmOff);
    const styleInviteMemberConfirm = { display: 'none' };
    this.setState({ styleInviteMemberConfirm });
  }

  inviteMemberConfirmOn() {
    document.removeEventListener("click", this.inviteMemberConfirmOn);
    const styleInviteMemberConfirm = { display: 'block' };
    this.setState({ styleInviteMemberConfirm });
  }

  inviteOfficerConfirm() {
    const styleInviteOfficer = { display: 'none' };
    this.setState({ styleInviteOfficer});
    const styleInviteOfficerConfirm = { display: 'block' };
    this.setState({ styleInviteOfficerConfirm });
  }

  inviteOfficerConfirmOff() {
    document.removeEventListener("click", this.inviteOfficerConfirmOff);
    const styleInviteOfficerConfirm = { display: 'none' };
    this.setState({ styleInviteOfficerConfirm });
  }

  inviteOfficerConfirmOn() {
    document.removeEventListener("click", this.inviteOfficerConfirmOn);
    const styleInviteOfficerConfirm = { display: 'block' };
    this.setState({ styleInviteOfficerConfirm });
  }

  render() {
    return (
      <div className='groupPageWrapper'>
        <div className='displayInviteMember' style={this.state.styleInviteMember}>
            <div className='inviteMember'>
                <InviteMember off={this.memberOff} confirm={this.inviteMemberConfirm} />
            </div>
        </div>
        <div className='displayInviteMemberConfirm' style={this.state.styleInviteMemberConfirm}>
            <div className='inviteMemberConfirm'>
                <InviteMemberConfirm off={this.inviteMemberConfirmOff} />
            </div>
        </div>
        <div className='displayInviteOfficer' style={this.state.styleInviteOfficer}>
            <div className='inviteOfficer'>
                <InviteOfficer off={this.officerOff} confirm={this.inviteOfficerConfirm} />
            </div>
        </div>

        <div className='displayInviteOfficerConfirm' style={this.state.styleInviteOfficerConfirm}>
            <div className='inviteOfficerConfirm'>
                <InviteOfficerConfirm off={this.inviteOfficerConfirmOff} />
            </div>
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
                                    <a href='javascript:void(0)' onClick={this.officerOn}>Invite Officers</a>
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
                                    <a href='javascript:void(0)' onClick={this.memberOn}><h5>Invite Members</h5></a>
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