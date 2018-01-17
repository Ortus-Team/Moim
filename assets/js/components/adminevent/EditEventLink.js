import React from 'react';
import { Link } from 'react-router';


export class EditEventLink extends React.Component {
  render() {
    return (
      <div className='overviewMainEdit'>
        <p><a className='purple' href='javascript:void(0)' onClick={this.props.editOn}>Edit Event Details</a></p>
      </div>
    );
  }
};