import React from 'react';
import { Link } from 'react-router';

export class FeedItem extends React.Component {
  render() {
    return (
      <div className="feedItem">
        <div className="feedItemTop">
          <div className="feedItemIcon" />
          <div className="feedItemAuthor">
          <Link key='group-home' to='/group-home'><h4>KSA</h4></Link>
            <p>Thursday at 10:31pm</p>
          </div>
        </div>
        <h3 className="feedItemTitle">Our event is coming up!</h3>
        <p className="feedItemPost">Lorem Khaled Ipsum is a major key to success. Lion! They don’t want us to eat. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Surround yourself with angels. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Special cloth alert. Life is what you make it, so let’s make it. Don’t ever play yourself. Eliptical talk. Don’t ever play yourself. Eliptical talk. Don’t ever play yourself. Eliptical talk.</p>
      </div>
    );
  }
}
