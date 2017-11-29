import React from 'react';
import { Navbar } from '../components/Navbar';
import { Feed } from '../components/dashboard/Feed';

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
          <Feed />
          <div className="dashboardSideContent">
            additional content
          </div>
        </div>
      </div>
    );
  }
}
