import React from 'react';
import { FeedItem } from '../FeedItem';

export class Feed extends React.Component {
  render() {
    return (
      <div className="dashboardFeed">
        <h5 className='subheading'>Recent Activity</h5>
        <div className="dashboardFeedItems">
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </div>
      </div>
    );
  }
}
