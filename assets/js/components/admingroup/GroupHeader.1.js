import React from 'react';

export class GroupHeader extends React.Component {
  render() {
    return (
        <div className='groupHeader2'>
            <div className='groupHeader2Wrapper'>
                <div className="groupHeader2Content">
                    {/* Cover Image */}
                    <div className="groupHeader2Image">
                        <img src="#" alt="group_header_image" />
                    </div>

                    <div className="groupHeader2MainContent">
                        {/* Logo */}
                        <div className="groupHeader2Logo">
                            <img src="#" alt="logo" />
                        </div>

                        {/* Label */}
                        <div className="groupHeader2Text">
                            <div className="groupHeader2MainText">
                                <h2 className="groupName">Name of Group</h2>
                                <h3 className="followers"># Followers - # Members</h3>
                                <div className="membership">
                                    <button className="join">Join +</button>
                                    <button className="follow">Follow +</button>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="groupHeader2Tags">
                                <div className="groupHeader2Cats">
                                </div>
                                <div className="groupHeader2Size">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="groupHeader2Menu">
                        <div className="groupHeader2TabsWrapper">
                            <div className="groupHeader2Tab">
                                <a href="#">Overview</a>
                            </div>
                            <div className="groupHeader2Tab">
                                <a href="#">Events</a>
                            </div>
                            <div className="groupHeader2Tab">
                                <a href="#">Officers</a>
                            </div>
                            <div className="groupHeader2Tab">
                                <a href="#">Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
  }
};