import React from 'react';
import { Link } from 'react-router';


export class InviteMember extends React.Component {
  render() {
    return (
      <div className='inviteMemberWrapper'>
        <div className='inviteMemberOverlay' onClick={this.props.off} />
        <div className='inviteMemberBox'>
          <div className='inviteMemberContent'>
            <div className='inviteMemberCancel'>
              <a className='cancelEdit' onClick={this.props.off}>Cancel</a>
            </div>
            <h2>Invite Members</h2>
            <div className='inviteMemberForm'>
              <div className='inviteMemberInstructions'>
                <h3>Type the emails of the members you would like to invite in a comma separated list.</h3>
              </div>
              <textarea className='inviteMemberInput' rows="4" name="memberemails" form="invitemembers" />
              <div className='inviteMemberInvites'>
                <form /* action="/action_page.php" */ id="invitemembers">
                  <input type="submit" value='send invites' onClick={this.props.confirm} />
                </form>
              </div>
            </div>
            {/* <button className='saveEdit' onClick={this.props.off}>Save</button> */}
          </div>
        </div>
      </div>
    );
  }
};