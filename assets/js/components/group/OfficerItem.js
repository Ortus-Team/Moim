import React from 'react';

export class OfficerItem extends React.Component {
  render() {
    return (
        <div className="officer">
            <div className="officerWrapper">
                <div className="officerContent">
                    {/* Image */}
                    <div className="officerImage">
                        <img src="#" /> {/* missing alt tag */}
                    </div>

                    <div className="officerText">
                        <p className="officerName">Officer Name</p>
                        <h4 className="officerTitle">Officer Title</h4>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};