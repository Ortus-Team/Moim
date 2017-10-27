import React from 'react';

import { StudentGroupItem } from '../StudentGroupItem';

export class StudentGroups extends React.Component {
  render() {
    return (
      <div className="dirSectionWrapper">
        <div className="topStudentGroups">
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
        </div>
        <div className="studentGroups">
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
        </div>
        <div className="studentGroups">
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
        </div>
      </div>
    );
  }
};