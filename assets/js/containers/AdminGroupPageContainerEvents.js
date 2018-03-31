import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/admingroup/GroupHeader';
import { GroupContentNav } from '../components/admingroup/GroupContentNav';
// import { GroupContent } from '../components/group/GroupContent';
import { GroupContentEvents } from '../components/admingroup/GroupContentEvents';
// import { GroupContentOfficers } from '../components/group/GroupContentOfficers';
// import { GroupContentGallery } from '../components/group/GroupContentGallery';

export class AdminGroupPageContainerEvents extends React.Component {
  render() {
    return (
      <div className='groupPageWrapper'>
        <Navbar />
        <div className='groupPageContent'>
          <GroupHeader />
          <GroupContentNav />
          <div className='groupPageContentWidth'>
            <GroupContentEvents />
          </div>
        </div>
      </div>
    );
  }
};