import React from 'react';
import { Link } from 'react-router';

export class StudentGroupItem extends React.Component {
  render() {
    return (
        <div className="group">
            <div className="groupWrapper">
                <Link key='group-home' to='/group-home'>
                    <div className="groupContent">

                        {/* Logo */}
                        <div className="groupLogo">
                            <img src="#" alt="logo" />
                        </div>

                        {/* Label */}
                        <div className="groupText">
                            <h3 className="groupItemName">Name of Group is long</h3>

                            {/* Tags */}
                            <div className="groupTags">
                                <div className="groupCats">
                                    <div className="groupCat">
                                        <h4 className="groupCatText">Category</h4>
                                    </div>
                                    <div className="groupCat">
                                        <h4 className="groupCatText">Category</h4>
                                    </div>
                                </div>
                                <div className="groupSize">
                                    <h4 className="groupSizeText">250 members</h4>
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