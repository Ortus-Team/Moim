import React from 'react';

export class SignUpContainer extends React.Component {

  render() {
    return (
      <div className='signUpContainer'>
        <div className='signUpContent'>
          <h2>Welcome to moim!</h2>
          <h1>Sign up</h1>
          <div className='signUpForm'>
            <form>
              {/* <label for="fname">First Name</label> */}
              <input type="text" id="fname" name="firstname" placeholder="First Name" />
              <br />
              <input type="text" id="lname" name="lastname" placeholder="Last Name" />
              <br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
};