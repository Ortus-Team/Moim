import React from 'react';

export class AlbumItem extends React.Component {
  render() {
    return (
        <div className="album">
            <div className="albumWrapper">
                <div className="albumContent">
                    {/* Image */}
                    <div className="albumImage">
                        <img src="#" /> {/* missing alt tag */}
                    </div>

                    {/* 
                    <div className="albumText">
                        <h3 className="albumName">Album Name</h3>
                        <h4 className="albumTitle">album Title</h4>
                    </div> */}
                </div>
            </div>
        </div>
    );
  }
};