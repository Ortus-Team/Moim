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
                            <img src={this.props.logo} alt="logo" />
                        </div>

                        {/* Label */}
                        <div className="groupText">
                            <h3 className="groupItemName">{this.props.groupName}</h3>

                            {/* Tags */}
                            <div className="groupTags">
                                <div className="groupCats">
                                    <div className="groupCat">
                                        <p className="caption">{this.props.groupCat1}</p>
                                    </div>
                                    <div className="groupCat">
                                        <p className="caption">{this.props.groupCat2}</p>
                                    </div>
                                </div>
                                <div className="groupSize">
                                    <p className="caption">{this.props.groupMembers}</p>
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