import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/group/GroupHeader';
import { GroupContentNav } from '../components/group/GroupContentNav';
// import { GroupContent } from '../components/group/GroupContent';
//import { GroupContentEvents } from '../components/group/GroupContentEvents';
import { GroupContentOfficers } from '../components/group/GroupContentOfficers';
// import { GroupContentGallery } from '../components/group/GroupContentGallery';

export class GroupPageContainerPeople extends React.Component {
  render() {
    return (
      <div className='groupPageWrapper'>
        <Navbar />
        <div className='groupPageContent'>
          <GroupHeader />
          <GroupContentNav />
          <div className='groupPageContentWidth'>
            <GroupContentOfficers />
          </div>
        </div>
      </div>
    );
  }
};