import React from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router';

export class CreateEventPageContainer extends React.Component {
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
            <div className='editGroupTitle'><h2>Create Event</h2></div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Event Title</p>
              </div>
              <input type="text" name="firstname" value="ironman@uw.edu" />
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Group Name</p>
              </div>
              <p>Group name goes here</p>
              
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Event Type</p>
              </div>
              <input type="text" name="firstname" value="Website URL" />
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Event Poster / Image</p>
              </div>
              <div className='eGCover' />
            </div>
            <div className='eGItem'>
              <div className='eGItemLabel'>
                <p>Event Description</p>
              </div>
              <textarea rows="4" cols="50" name="comment">About your group</textarea>
            </div>
            
            
            <div className='eGOptions'>
              <Link key='admingroup' to='/admin-group-home'><button type="submit" value="Save">Create Event</button></Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
