import React from 'react';

export class GroupHeader extends React.Component {
  render() {
    return (
        <div className="groupHeader">
            <div className="groupHeaderContent">
                <div className="groupHeaderCoverImageWrapper">
                    <div className="groupHeaderCoverImage">
                        Cover Image
                    </div>
                </div>
                {/*}
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
                            Logo
                        </div>
                        <div className="groupHeaderText">
                            <div className="groupHeaderTextLeft">
                                <h1>Name of Student Group</h1>
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
                                
                            </div>
                            <div className="groupHeaderTextRight">
                                <div className="groupHeaderButtonsWrapper">
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