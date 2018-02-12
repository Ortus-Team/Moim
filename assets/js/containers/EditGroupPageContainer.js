import React from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router';

export class EditGroupPageContainer extends React.Component {
  render() {
    return (
      <div className="editGroupWrapper">
        <Navbar />
        <div className='eGBack'>
          <Link key='admingroup' to='/admin-group-home'>
          <h5>Back to Group name goes here</h5>
          </Link>
        </div>
        <div className="editGroupContent">
          {/*<div className='eGMenu'>
            <div className='eGMenuTabs'>
              <div className='eGMenuTabSelected'>
                <h5>Edit Group</h5>
              </div>
              <div className='eGMenuTab'>
                <h5>Account Settings</h5>
              </div>
            </div>
          </div>*/}
          
          <div className='eGTabContent'>
            <div className='editGroupTitle'><h2>Edit Group Details</h2></div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Group Name</p>
              </div>
              <p>Group name goes here</p>
              
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Logo</p>
              </div>
              <div className='eGLogo' />
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Cover Photo</p>
              </div>
              <div className='eGCover' />
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>About Us Description</p>
              </div>
              <textarea rows="4" cols="50" name="comment">About your group</textarea>
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Email</p>
              </div>
              <input type="text" name="firstname" value="ironman@uw.edu" />
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Website</p>
              </div>
              <input type="text" name="firstname" value="Website URL" />
            </div>
            <div className='eGOptions'>
              <input type="submit" value="Save" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
