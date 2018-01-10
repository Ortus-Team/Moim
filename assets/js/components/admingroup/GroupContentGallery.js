import React from 'react';
import { AlbumItem } from './AlbumItem';

export class GroupContentGallery extends React.Component {
  render() {
    return (
        <div className='groupContentGallery'>
            <div className='groupContentGalleryWrapper'>
                <div className="groupContentGalleryContent">
                    <div className="groupPageTopContent">
                        <div className="groupPageGallery">
                            {/* <h3 className='groupSectionHeading'>Gallery</h3> */}
                            <div className="groupGalleryContent">
                                <AlbumItem />
                                <AlbumItem />
                                <AlbumItem />
                                <AlbumItem />
                            </div>
                            <div className="groupGalleryContent">
                                <AlbumItem />
                                <AlbumItem />
                                <AlbumItem />
                                <AlbumItem />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};