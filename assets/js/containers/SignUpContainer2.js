import React from 'react';
import { Link } from 'react-router';

export class SignUpContainer2 extends React.Component {

  render() {
    return (
      <div className='signUpContainer'>
        <div className='signUpContent'>
          <div className='signUpContentBox'>
            <div className='signUpContentTitle'>
              <h2>What is your major or intended major?</h2>
            </div>
            <div className='signUpForm'>
              <form>
                {/* <label for="fname">First Name</label> */}
                <input type="text" id="major" name="major" placeholder="Select One" />
                <br />
                <div className='signUpButton'>
                  <Link key='signup3' to='/signup3'><input type="submit" value="Next" /></Link>
                </div>
              </form>
            </div>
            <div className='signUpFormProgress'>
              <div className='signUpFormCircles'>
                <div className='signUpFormCircleDone' />
                <div className='signUpFormCircleActive' />
                <div className='signUpFormCircle' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};