import React from 'react';
import { Link } from 'react-router';

export class StudentGroupItem extends React.Component {
  render() {
    return (
        <div className="group">
            <div className="groupWrapper">
                <Link key='group-home' to='/group-home'>
                    <div className="groupContent">
                        <div className='groupItemNameWrapper'>
                            <h3 className="groupItemName">American Water Works Association-Water Environment Federation Student Chapter</h3>
                        </div>
                        {/* Label */}
                        <div className="groupItemInfo">
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

                            {/* Logo */}
                            <div className="groupLogo">
                                <img src="#" alt="logo" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
  }
};