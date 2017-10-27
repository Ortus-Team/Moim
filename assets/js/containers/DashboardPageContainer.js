import React from 'react';
import { Navbar } from '../components/Navbar';

export class DashboardPageContainer extends React.Component {
  render() {
    return (
      <div className="dashboardPageWrapper">
        <Navbar />
        <div className="dashboardPageContent">
          <div className="dashboardProfile">
            <div className="dashboardProfilePic">
              profile pic
            </div>
            <div className="dashboardProfileText">
              <h3>First Last</h3>
              <h4>Majors</h4>
            </div>

          </div>
          <div className="dashboardMainContent">
            <div className="dashboardMainContentNav">
              <a href="#" className="dashboardNavLink">Feed</a>
              <a href="#" className="dashboardNavLink">Upcoming Events</a>
              <a href="#" className="dashboardNavLink">Groups</a>
            </div>
          </div>
          <div className="dashboardSideContent">
            additional content
          </div>
        </div>
      </div>
    );
  }
}
