import React from 'react';
import { Link } from 'react-router';

export class GroupContentNav extends React.Component {
  render() {
    return (
        <div className="groupContentNavWrapper">
            <div className="groupContentNav">
                <div className="groupContentNavLinksWrapper">
                    <div className="groupContentNavLink">
                        <Link key='group-home' to='/admin-group-home'>Home</Link>
                    </div>
                    <div className="groupContentNavLink">
                        <Link key='group-events' to='/admin-group-events'>Events</Link>
                    </div>
                    <div className="groupContentNavLink">
                        <Link key='group-people' to='/admin-group-people'>People</Link>
                    </div>
                    <div className="groupContentNavLink">
                        <Link key='group-gallery' to='/group-gallery'>Gallery</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};