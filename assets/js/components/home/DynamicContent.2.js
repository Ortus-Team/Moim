import React from 'react';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class DynamicContent extends React.Component {
  render() {
    return (
        <div className='dynamicWrapper'>
          <div className='dynamicContent'>
            <div className='dynamicContentImage'>
              image
            </div>
            <div className='dynamicContentText'>
              <div className='titleAndLabel'>
                <h6 className='titleLabel'>RSO OF THE WEEK</h6>
                <h1>Korean Student Association</h1>
              </div>
              <h3 className='body'>Lorem Khaled Ipsum is a major key to success. Every chance I get, I water the plants, Lion! Celebrate success right, the only way, apple.</h3>
            </div>
          </div>
        </div>
    );
  }
};