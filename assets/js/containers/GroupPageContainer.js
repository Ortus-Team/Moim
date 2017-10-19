import React from 'react';

import { Navbar } from '../components/Navbar';
import { GroupHeader } from '../components/group/GroupHeader';
import { GroupContent } from '../components/group/GroupContent';
import { GroupContentEvents } from '../components/group/GroupContentEvents';
import { GroupContentOfficers } from '../components/group/GroupContentOfficers';
import { GroupContentGallery } from '../components/group/GroupContentGallery';

export class GroupPageContainer extends React.Component {
  render() {
    return (
      <div className='groupPageWrapper'>
        <Navbar />
        <div className='groupPageContent'>
          <GroupHeader />
          <div className='groupPageContentWidth'>
            <GroupContent />
          </div>
        </div>
      </div>
    );
  }
};