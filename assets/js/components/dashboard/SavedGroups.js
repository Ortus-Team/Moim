import React from 'react';
// import { EventItem } from 'components/EventItem/EventItem';
import { StudentGroupItem } from '../StudentGroupItem';

export class SavedGroups extends React.Component {
  render() {
    return (
      <div className="dashboardGroups">
        <h5 className='subheading'>Saved Groups</h5>
        <div className="yourGroups">
          <div className='groupItem'><StudentGroupItem /></div>
          
          <StudentGroupItem />
        </div>
      </div>
    );
  }
}
