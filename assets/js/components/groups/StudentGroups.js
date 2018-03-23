import React from 'react';

import { StudentGroupItem } from '../StudentGroupItem';

import logo from './ksa_logo.png';
var groupName = 'Korean Student Association';
var groupCat1 = 'Business';
var groupCat2 = 'Networking';
var groupMembers = '250 members';

export class StudentGroups extends React.Component {
  render() {
    return (
      <div className="dirSectionWrapper">
        <div className="topStudentGroups">
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
        <div className="studentGroups">
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
        <div className="studentGroups">
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
      </div>
    );
  }
};