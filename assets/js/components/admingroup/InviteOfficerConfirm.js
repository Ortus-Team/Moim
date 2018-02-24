import React from 'react';
import { Link } from 'react-router';


export class InviteOfficerConfirm extends React.Component {
  render() {
    return (
      <div className='inviteOfficerConfirmWrapper'>
        <div className='inviteOfficerConfirmOverlay' />
        <div className='inviteOfficerConfirmBox'>
          <div className='inviteOfficerConfirmContent'>
            <h2>Your invitations have been sent!</h2>
            <div className='inviteOfficerConfirmClose'>
              <a className='closeMemberInvite' onClick={this.props.off}>Close</a>
            </div>
            {/* <button className='saveEdit' onClick={this.props.off}>Save</button> */}
          </div>
        </div>
      </div>
    );
  }
};