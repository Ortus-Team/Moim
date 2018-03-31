import React from 'react';
import { createStore } from 'redux'
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Feed } from '../components/dashboard/Feed';
import { YourEvents } from '../components/dashboard/YourEvents';
import signupReduce from '../reducers/SignUpReducer';
const store = createStore(signupReduce)
import { YourGroups } from '../components/dashboard/YourGroups';
import { SavedGroups } from '../components/dashboard/SavedGroups';

export class DashGroupsPageContainer extends React.Component {
  render() {
    return (
      <div className="dashboardPageWrapper">
        <Navbar />
        <div className="dashboardPageContent">
          <div className="dashboardProfile">
            <div className='dashboardProfilePic' />
            <div className='dashboardProfileInfo'>
              <div className='dashboardProfileInfoMain'>
                <h2>{store.getState().personalData.firstname} {store.getState().personalData.lastname}</h2>
              </div>
              <div className='dPInfoMainDeets'>
                <div className='dashboardProfileInfoDeet'>
                  <p className='caption'>STUDENT STATUS</p>
                  <p>UW Alumni</p>
                </div>
                <div className='dashboardProfileInfoDeet'>
                  <p className='caption'>MAJOR</p>
                  <p>{store.getState().personalData.major}</p>
                </div>
                <div className='dashboardProfileInfoDeet'>
                  <p className='caption'>EMAIL</p>
                  <p>{store.getState().personalData.email}</p>
                </div>
              </div>
              <p className='dashboardEditLink'><Link key='edit-profile' to='edit-profile'>Edit Profile</Link></p>
            </div>
          </div>

          <div className="dashboardContent">
            <div className='dCMenu'>
              <div className='dCMenuTab'>
              <Link key='dash-activity' to='dash-activity'><h4>Activity</h4></Link>
              </div>
              <div className='dCMenuTab'>
              <Link key='dash-groups' to='dash-groups'><h4>My Groups</h4></Link>
              </div>
              {/*<div className='dCMenuTab'>
              <Link key='dash-messages' to='dash-messages'><h4>Messages</h4></Link>
    </div>*/}
            </div>
            <div className='dCActivity'>
              <YourGroups />
              <SavedGroups /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
