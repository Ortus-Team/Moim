import React from 'react';
import { Link } from 'react-router';
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
            <div className='dashboardProfilePic' />
            <div className='dashboardProfileInfo'>
              <div className='dashboardProfileInfoMain'>
                <h2>Tony Stark</h2>
                <div className='dPInfoMainDeets'>
                  <p>UW Alumni</p>
                  <p>B.S. Electrical Engineering</p>
                </div>
              </div>
              <div className='dashboardProfileInfoBio'>
                <p className='caption'>BIO</p>
                <p>Hi. I like making things.</p>
              </div>
              <p className='dashboardEditLink'><Link key='edit-profile' to='#'>Edit profile</Link></p>
            </div>
          </div>

          <div className="dashboardContent">
            <div className='dCMenu'>
              <div className='dCMenuTab'>
                <h4>Activity</h4>
              </div>
              <div className='dCMenuTab'>
                <h4>My Groups</h4>
              </div>
            </div>
            <div className='dCActivity'>
              <YourEvents />
              <Feed /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
