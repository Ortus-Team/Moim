import React from 'react';
import { Link } from 'react-router';


export class InviteMemberConfirm extends React.Component {
  render() {
    return (
      <div className='inviteMemberConfirmWrapper'>
        <div className='inviteMemberConfirmOverlay' />
        <div className='inviteMemberConfirmBox'>
          <div className='inviteMemberConfirmContent'>
            <h2>Your invitations have been sent!</h2>
            <div className='inviteMemberConfirmClose'>
              <a className='closeMemberInvite' onClick={this.props.off}>Close</a>
            </div>
            {/* <button className='saveEdit' onClick={this.props.off}>Save</button> */}
          </div>
        </div>
      </div>
    );
  }
};