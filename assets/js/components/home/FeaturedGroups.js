import React from 'react';

import { StudentGroupItem } from '../StudentGroupItem';

import logo from './ksa_logo.png';
var groupName = 'Korean Student Association';
var groupCat1 = 'Business';
var groupCat2 = 'Networking';
var groupMembers = '250 members';

export class FeaturedGroups extends React.Component {
  render() {
    return (
        <div className="sectionWrapper">
            <div className='homeSectionSeeAll'>
              <h2 className='homeSection'>Featured Groups</h2>
              <h3 className='seeAll'>See all</h3>
            </div>
            <div className="featuredGroups">
              <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
              <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
              <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
            </div>
            <div className="featuredGroups2">
              <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
              <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
              <StudentGroupItem logo={logo} groupName={groupName} groupCat1={groupCat1} groupCat2={groupCat2} groupMembers={groupMembers} />
            </div>
        </div>
    );
  }
};