import React from 'react';
import { Link } from 'react-router';

export class LoggedIn extends React.Component {

  render() {
    return (
      <div className="loggedIn">
        <Link key='dashboard' to='/dash-activity'><div className="accountLink" /></Link>
      </div>
    );
  }
}
