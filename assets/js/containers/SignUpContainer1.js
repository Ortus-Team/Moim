import React from 'react';
import { Link } from 'react-router';

export class SignUpContainer1 extends React.Component {

  render() {
    return (
      <div className='signUpContainer'>
        <div className='signUpContent'>
          <div className='signUpContentBox'>
            <div className='signUpContentTitle'>
              <h1>Welcome to moim!</h1>
              <h3>Just the basics.</h3>
            </div>
            <div className='signUpForm'>
              <form>
                {/* <label for="fname">First Name</label> */}
                <input type="text" id="fname" name="firstname" placeholder="First Name" />
                <br />
                <input type="text" id="lname" name="lastname" placeholder="Last Name" />
                <br />
                <input type="text" id="email" name="email" placeholder="Email" />
                <br />
                <div className='signUpButton'>
                  <Link key='signup2' to='/signup2'><input type="submit" value="Next" /></Link>
                </div>
              </form>
            </div>
            <div className='signUpFormProgress'>
              <div className='signUpFormCircles'>
                <div className='signUpFormCircleActive' />
                <div className='signUpFormCircle' />
                <div className='signUpFormCircle' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};