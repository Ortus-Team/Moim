import React from 'react';

export class GroupHeader extends React.Component {
  render() {
    return (
        <div className="groupHeader">
            <div className="groupHeaderContent">
                <div className="groupHeaderCoverImageWrapper">
                    <div className="groupHeaderCoverImage">
                        Image
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
                    <div className="groupHeaderTextWrapper2">
                        <div className="groupHeaderText">
                            Text
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};