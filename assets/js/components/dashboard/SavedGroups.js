import React from 'react';
import { StudentGroupItem } from '../StudentGroupItem';

import logo from './ksa_logo.png';
var groupName = 'Korean Student Association';
var groupCat1 = 'Business';
var groupCat2 = 'Networking';
var groupMembers = '250 members';
// Need to talk with Yujin
export class SavedGroups extends React.Component {
  render() {
    return (
      <div className="dashboardGroups">
        <h5 className='subheading'>Saved Groups</h5>
        <div className="yourGroups">
          <div className='groupItem'><StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} /></div>
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
      </div>
    );
  }
}
