import React from 'react';
import { Link } from 'react-router';


export class InviteMember extends React.Component {
  render() {
    return (
      <div className='inviteMemberWrapper'>
        <div className='inviteMemberOverlay' />
        <div className='inviteMemberBox'>
          <div className='inviteMemberContent'>
            <h2>Invite Member</h2>
            <h4>inviting stuff</h4>
            <a className='cancelEdit' onClick={this.props.off}>Cancel</a>
            <button className='saveEdit' onClick={this.props.off}>Save</button>
          </div>
        </div>
      </div>
    );
  }
};