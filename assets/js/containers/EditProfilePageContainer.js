import React from 'react';
import { Navbar } from '../components/Navbar';

export class EditProfilePageContainer extends React.Component {
  render() {
    return (
      <div className="editProfileWrapper">
        <Navbar />
        <div className="editProfileContent">
          <div className='ePMenu'>
            <div className='ePMenuTabs'>
              <div className='ePMenuTabSelected'>
                <h4>Edit Profile</h4>
              </div>
              <div className='ePMenuTab'>
                <h4>Account Settings</h4>
              </div>
            </div>
          </div>
          <div className='ePTabContent'>
            
            <div className='ePItem'>
              <div className='ePItemLabel'>
                <p>Profile Picture</p>
              </div>
              <div className='ePProfilePicture' />
              
            </div>
            <div className='ePItem'>
              <div className='ePItemLabel'>
                <p>First Name</p>
              </div>
              <input type="text" name="firstname" value="Tony" />
            </div>
            <div className='ePItem'>
              <div className='ePItemLabel'>
                <p>Last Name</p>
              </div>
              <input type="text" name="firstname" value="Stark" />
            </div>
            <div className='ePItem'>
              <div className='ePItemLabel'>
                <p>Email</p>
              </div>
              <input type="text" name="firstname" value="ironman@uw.edu" />
            </div>
            <div className='ePItem'>
              <div className='ePItemLabel'>
                <p>Student Status</p>
              </div>
              <input type="text" name="firstname" value="UW Alumni" />
            </div>
            <div className='ePItem'>
              <div className='ePItemLabel'>
                <p>Major</p>
                <p className='legal'>(optional)</p>
              </div>
              <input type="text" name="firstname" value="Electrical Engineering" />
            </div>
            <div className='ePOptions'>
              <input type="submit" value="Save" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
