import React from 'react';
import { Link } from 'react-router';


export class InviteOfficer extends React.Component {
  render() {
    return (
      <div className='inviteOfficerWrapper'>
        <div className='inviteOfficerOverlay' onClick={this.props.off} />
        <div className='inviteOfficerBox'>
          <div className='inviteOfficerContent'>
            <div className='inviteOfficerCancel'>
              <a className='cancelEdit' onClick={this.props.off}>Cancel</a>
            </div>
            <h2>Invite Officers</h2>
            <div className='inviteOfficerForm'>
              <div className='inviteOfficerInstructions'>
                <h3>Type the officer's email and choose a role to add them as.</h3>
              </div>
              <div className='inviteOfficerInvites'>
                <form /* action="/action_page.php" */ id="inviteOfficers">
                  <div className='inviteOfficerInfo'>
                    <div className='inviteOfficerEmailWrapper'>
                      Email<br />
                      <input className='inviteOfficerEmail' type="text" name="email" />
                    </div>
                    <div className='inviteOfficerRoleWrapper'>
                      Role<br />
                      <input className='inviteOfficerRole' type='text' name='role' />
                    </div>
                  </div>
                  <input type="submit" value='send invites' onClick={this.props.confirm} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};