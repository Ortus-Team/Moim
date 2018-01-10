import React from 'react';
import backPic from './uw.jpg';
import { Navbar } from '../components/Navbar';
import { Feed } from '../components/dashboard/Feed';
import { YourEvents } from '../components/dashboard/YourEvents';

export class DashboardPageContainer extends React.Component {
  render() {
    return (
      <div className="dashboardPageWrapper">
        <Navbar />
        <div className="dashboardPageContent">
          <div className="dashboardProfile">
            <div className="dashboardProfileBackPic">
              <img src={backPic} />
            </div>
            <div className="dashboardProfileContent">
              <div className="dashboardProfileTop">
                <div className="dashboardGearEven" />
                <div className="dashboardProfilePic">
                  profile pic
                </div>
                <div className="dashboardProfileGear">
                  Settings
                </div>
              </div>
              <div className="dashboardProfileText">
                <h2>Welcome back, Firstname!</h2>
              </div>
            </div>
          </div>
          <div className="dashboardSubContent">
            <div className="dashboardSubContentWidth">
              <div className="dashboardFeedEvents">
                <Feed />                
                <YourEvents />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
