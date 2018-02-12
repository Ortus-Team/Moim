import React from 'react';
import { Link } from 'react-router';

export class StudentGroupItem extends React.Component {
  render() {
    return (
        <div className="group">
            <div className="groupWrapper">
                <Link key='group' to='/group'>
                    <div className="groupContent">
                        {/* Cover Image */}
                        <div className="groupImage">
                            <img src="#" alt="group_name" />
                        </div>

                        {/* Logo */}
                        <div className="groupLogo">
                            <img src="#" alt="logo" />
                        </div>

                        {/* Label */}
                        <div className="groupText">
                            <h3>Name of Group</h3>

                            {/* Tags */}
                            <div className="groupTags">
                                <div className="groupCats">
                                </div>
                                <div className="groupSize">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
  }
};