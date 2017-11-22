import React from 'react';

import { Navbar } from '../components/Navbar';

import { DirectoryHeader } from '../components/groups/DirectoryHeader';
import { Filters } from '../components/groups/Filters';
import { StudentGroups } from '../components/groups/StudentGroups';
import {getOrgs} from "../actions/OrgAction";

export class GroupsPageContainer extends React.Component {
  constructor(props) {
    super(props);
    getOrgs(); 
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='dirWrapper'>
        <Navbar />
        <div className='dirHeader'>
          <DirectoryHeader />
        </div>
        <div className='dirFilters'>
          <Filters />
        </div>
        <div className='dirContent'>
          <StudentGroups />
        </div>
      </div>
    );
  }
};
