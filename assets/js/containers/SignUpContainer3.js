import React from 'react';

export class SignUpContainer3 extends React.Component {

  render() {
    return (
      <div className='signUpContainer'>
        <div className='signUpContent'>
          <div className='signUpContentBox'>
            <div className='signUpContentTitle'>
              <h2>Upload a profile picture</h2>
            </div>
            <div className='signUpForm'>
              <form>
                {/* <label for="fname">First Name</label> */}
                <div className='signUpProfilePic' />
                <div className='signUpButton'>
                  <input type="submit" value="Finish!" />
                </div>
              </form>
            </div>
            <div className='signUpFormProgress'>
              <div className='signUpFormCircles'>
                <div className='signUpFormCircleDone' />
                <div className='signUpFormCircleDone' />
                <div className='signUpFormCircleActive' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};