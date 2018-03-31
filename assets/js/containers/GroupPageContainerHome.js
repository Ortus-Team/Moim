import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/group/GroupHeader';
import { GroupContentNav } from '../components/group/GroupContentNav';
import { GroupContent } from '../components/group/GroupContent';
// import { GroupContentEvents } from '../components/group/GroupContentEvents';
// import { GroupContentOfficers } from '../components/group/GroupContentOfficers';
// import { GroupContentGallery } from '../components/group/GroupContentGallery';


// GroupHeader
import logo from './ksa_logo.png';
import coverImage from './ksa(jsa).jpg';
var groupName = 'Korean Student Association';
var groupCat1 = 'Business';
var groupCat2 = 'Networking';
var groupMembers = '250 members';
var groupSite = 'www.ksa.uw';
var groupEmail = 'ksa@uw.edu';

// group content
var aboutGroup = 'This is what were about. Lorem Khaled Ipsum is a major key to success. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. We don’t see them, we will never see them. Don’t ever play yourself. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion!';
// upcoming event
import upcomingEvent from './event_poster.jpg';
var eventName = 'Dead Poetry: SDHS Open Mic Night';
var groupName = 'Name of Student Group';
var eventDate = 'Nov. 14th @ 5PM';
var eventLoc = 'SDHS Auditorium';

export class GroupPageContainerHome extends React.Component {
  render() {
    return (
      <div className='groupPageWrapper'>
        <Navbar />
        <div className='groupPageContent'>
          <GroupHeader logo={logo} coverImage={coverImage} groupName={groupName} groupSite={groupSite} groupEmail={groupEmail} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <GroupContentNav />
          <GroupContent aboutGroup={aboutGroup} upcomingEvent={upcomingEvent} eventName={eventName} groupName={groupName} eventDate={eventDate} eventLoc={eventLoc}/>
        </div>
      </div>
    );
  }
};