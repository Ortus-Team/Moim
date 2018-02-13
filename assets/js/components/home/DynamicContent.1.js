import React from 'react';
import { Link } from 'react-router';

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
            <div className='layer' />
            <div className='dynamicContentTextWrapper'>
              <div className='dynamicContentText'>
                <div className='titleAndLabel'>
                  <h6 className='titleLabel'>RSO OF THE WEEK</h6>
                  <h1 className='title'>Korean Student Association</h1>
                </div>
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
                <p>Lorem Khaled Ipsum is a major key to success. Every chance I get, I water the plants, Lion! Celebrate success right, the only way, apple.</p>
                <Link key='group-home' to='/group-home'><button className='button2'><p>Learn More</p></button>{/*<p className='learnMore'>Learn more</p>*/}</Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
};