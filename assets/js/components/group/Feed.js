import React from 'react';
import { FeedItem } from '../FeedItem';

export class Feed extends React.Component {
  render() {
    return (
      <div className="groupFeed">
        <h3 className='subheading'>Recent Activity</h3>
        <hr />
        <div className="groupFeedItems">
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </div>
      </div>
    );
  }
}
