import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/admingroup/GroupHeader';
import { GroupContentNav } from '../components/admingroup/GroupContentNav';
import { GroupContent } from '../components/admingroup/GroupContent';
// import { GroupContentEvents } from '../components/group/GroupContentEvents';
// import { GroupContentOfficers } from '../components/group/GroupContentOfficers';
// import { GroupContentGallery } from '../components/group/GroupContentGallery';

export class AdminGroupPageContainerHome extends React.Component {
  render() {
    return (
      <div className='groupPageWrapper'>
        <Navbar />
        <div className='groupPageContent'>
          <GroupHeader />
          <GroupContentNav />
          <GroupContent />
        </div>
      </div>
    );
  }
};