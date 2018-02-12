import React from 'react';
import { Link } from 'react-router';

export class GroupHeader extends React.Component {
  render() {
    return (
        <div className="adminGroupHeader">
            <div className="adminGroupHeaderContent">
                <div className="adminGroupHeaderCoverImageWrapper">
                    <div className="adminGroupHeaderCoverImage">
                        Cover Image
                        <Link key='editgroup' to='/edit-group'>
                        <div className='adminGroupHeaderEditButton'>
                            <h5>/ Edit Group Details</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                {/*
                <div className="adminGroupHeaderLogoWrapper">
                    <div className="adminGroupHeaderLogoWidth">
                        <div className="adminGroupHeaderLogo">
                            Logo
                        </div>
                    </div>
                </div>*/}
                <div className="adminGroupHeaderContentWrapper">
                    
                    <div className="adminGroupHeaderContentWrapperWidth">
                        <div className="adminGroupHeaderLogo">
                            Logo
                        </div>
                        <div className="adminGroupHeaderText">
                            <div className="adminGroupHeaderTextLeft">
                                <h1>(Admin) Name of Student Group</h1>
                                <div className="groupTags">
                                    <div className="groupCats">
                                        <div className="groupCat">
                                            <p className="caption">Business</p>
                                        </div>
                                        <div className="groupCat">
                                            <p className="caption">Networking</p>
                                        </div>
                                        <div className="groupSize">
                                            <p className="caption">250 members</p>
                                        </div>
                                    </div> 
                                </div>
                                <div className='adminGroupContact'>
                                    <h6>www.ksauw.com</h6>
                                    <h6>ksa@uw.edu</h6>
                                </div>
                                
                            </div>
                            <div className="adminGroupHeaderTextRight">
                                <div className="adminGroupHeaderButtonsWrapper">
                                    <div id='bookmark-ribbon' />
                                    <a href="/adminGroup-home" className="adminGroupHeaderButton">+ Join Group</a>
                                </div>
                                <div className="adminGroupHeaderSettings" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};