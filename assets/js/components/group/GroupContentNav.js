import React from 'react';
import { Link } from 'react-router';

export class GroupContentNav extends React.Component {
  render() {
    return (
        <div className="groupContentNavWrapper">
            <div className="groupContentNav">
                <div className="groupContentNavLinksWrapper">
                    <div className="groupContentNavLink">
                        <Link key='group-home' to='/group-home'><p>Home</p></Link>
                    </div>
                    <div className="groupContentNavLink">
                        <Link key='group-events' to='/group-events'><p>Events</p></Link>
                    </div>
                    <div className="groupContentNavLink">
                        <Link key='group-people' to='/group-people'><p>People</p></Link>
                    </div>
                    <div className="groupContentNavLink">
                        <Link key='group-gallery' to='/group-gallery'><p>Gallery</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};