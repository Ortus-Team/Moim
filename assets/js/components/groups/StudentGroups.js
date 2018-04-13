import React from 'react';

import { StudentGroupItem } from '../StudentGroupItem';
import orgReduce from '../../reducers/OrgReducer';
const store = createStore(orgReduce)

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
          for (var i = 0; i < 3; i++) {
            var gName = store.getState().orgs.name
            var gCat1 = store.getState().orgs.categories[0]
            var gCat2 = store.getState().orgs.categories[1]
            var gMem = store.getState().orgs.members.length
            var gMemCount = gMem + ' members'
            <StudentGroupItem logo={logo} groupName={gName} groupCat1={gCat1} groupCat2={gCat2} groupMembers={gMemCount} />
          }
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
        <div className="studentGroups">
          for (var i = 0; i < 3; i++) {
            var gName = store.getState().orgs.name
            var gCat1 = store.getState().orgs.categories[0]
            var gCat2 = store.getState().orgs.categories[1]
            var gMem = store.getState().orgs.members.length
            var gMemCount = gMem + ' members'
            <StudentGroupItem logo={logo} groupName={gName} groupCat1={gCat1} groupCat2={gCat2} groupMembers={gMemCount} />
          }
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
        <div className="studentGroups">
          for (var i = 0; i < 3; i++) {
            var gName = store.getState().orgs.name
            var gCat1 = store.getState().orgs.categories[0]
            var gCat2 = store.getState().orgs.categories[1]
            var gMem = store.getState().orgs.members.length
            var gMemCount = gMem + ' members'
            <StudentGroupItem logo={logo} groupName={gName} groupCat1={gCat1} groupCat2={gCat2} groupMembers={gMemCount} />
          }
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
          // <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
        </div>
      </div>
    );
  }
};