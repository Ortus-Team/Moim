import React from 'react';
import { Link } from 'react-router';
import logo from './ksa_logo.png';

export class StudentGroupItem extends React.Component {
  render() {
    return (
        <div className="group">
            <div className="groupWrapper">
                <Link key='group-home' to='/group-home'>
                    <div className="groupContent">

                        {/* Logo */}
                        <div className="groupLogo">
                            <img src={logo} alt="logo" />
                        </div>

                        {/* Label */}
                        <div className="groupText">
                            <h3 className="groupItemName">Korean Student Association</h3>

                            {/* Tags */}
                            <div className="groupTags">
                                <div className="groupCats">
                                    <div className="groupCat">
                                        <p className="caption">Business</p>
                                    </div>
                                    <div className="groupCat">
                                        <p className="caption">Networking</p>
                                    </div>
                                </div>
                                <div className="groupSize">
                                    <p className="caption">250 members</p>
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