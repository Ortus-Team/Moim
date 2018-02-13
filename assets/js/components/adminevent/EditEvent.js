import React from 'react';
import { Link } from 'react-router';


export class EditEvent extends React.Component {
  render() {
    return (
      <div className='eventEditWrapper'>
        <div className='eventEditOverlay' />
        <div className='eventEditBox'>
          <div className='eventEditContent'>
            <h2>Edit Event</h2>
            <h4>import from facebook</h4>
            <p>editing schtuff</p>
            <a className='cancelEdit' onClick={this.props.off}>Cancel</a>
            <button className='saveEdit' onClick={this.props.off}>Save</button>
          </div>
        </div>
      </div>
    );
  }
};