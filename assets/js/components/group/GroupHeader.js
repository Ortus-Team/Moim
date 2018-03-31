import React from 'react';

export class GroupHeader extends React.Component {
  render() {
    return (
        <div className="groupHeader">
            <div className="groupHeaderContent">
                <div className="groupHeaderCoverImageWrapper">
                    <div className="groupHeaderCoverImage">
                        <img src={this.props.coverImage} alt="cover image" />
                    </div>
                </div>
                {/*
                <div className="groupHeaderLogoWrapper">
                    <div className="groupHeaderLogoWidth">
                        <div className="groupHeaderLogo">
                            Logo
                        </div>
                    </div>
                </div>*/}
                <div className="groupHeaderContentWrapper">
                    
                    <div className="groupHeaderContentWrapperWidth">
                        <div className="groupHeaderLogo">
                            <img src={this.props.logo} alt="logo" />
                        </div>
                        <div className="groupHeaderText">
                            <div className="groupHeaderTextLeft">
                                <h1>{this.props.groupName}</h1>
                                <div className="groupTags">
                                    <div className="groupCats">
                                        <div className="groupCat">
                                            <p className="caption">{this.props.groupCat1}</p>
                                        </div>
                                        <div className="groupCat">
                                            <p className="caption">{this.props.groupCat2}</p>
                                        </div>
                                        <div className="groupSize">
                                            <p className="caption">{this.props.groupMembers}</p>
                                        </div>
                                    </div> 
                                </div>
                                <div className='groupContact'>
                                    <h6>{this.props.groupSite}</h6>
                                    <h6>{this.props.groupEmail}</h6>
                                </div>
                                
                            </div>
                            <div className="groupHeaderTextRight">
                                <div className="groupHeaderButtonsWrapper">
                                    <div id='bookmark-ribbon' />
                                    <a href="/group-home" className="groupHeaderButton">+ Join group</a>
                                </div>
                                <div className="groupHeaderSettings" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};