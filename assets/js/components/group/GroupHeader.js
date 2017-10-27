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
                <div className="groupHeaderLogoWrapper">
                    <div className="groupHeaderLogoWidth">
                        <div className="groupHeaderLogo">
                            Logo
                        </div>
                    </div>
                </div>
                <div className="groupHeaderTextWrapper">
                    <div className="groupHeaderTextWrapperWidth">
                        <div className="groupHeaderText">
                            <div className="groupHeaderTextLeft">
                                <h2>Name of Student Group</h2>
                                <div className="groupHeaderButtonsWrapper">
                                    <a href="/group-home" className="groupHeaderButton">Join +</a>
                                    <a href="/group-home" className="groupHeaderButton">Follow +</a>
                                </div>
                            </div>
                            <div className="groupHeaderTextRight">
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