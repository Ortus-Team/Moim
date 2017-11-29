import React from 'react';

export class Feed extends React.Component {
  render() {
    return (
      <div className="dashboardMainContent">
        <div className="dashboardMainContentNav">
          <a href="#" className="dashboardActiveNavLink">Feed</a>
          <a href="#" className="dashboardNavLink">Upcoming Events</a>
          <a href="#" className="dashboardNavLink">Groups</a>
        </div>

      </div>
    );
  }
}
