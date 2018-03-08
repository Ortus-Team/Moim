import { createStore } from 'redux'
import signupReduce from '../reducers/SignUpReducer'
import tokenReduce from '../reducers/TokenReducer'
import { hashHistory } from 'react-router';
const store = createStore(signupReduce)
const tokenstore = createStore(tokenReduce)
import React from 'react';

const host = window.location.host;
export const ROOT_URL = 'http://' + host + '/api/v1';

export class SignUpContainer3 extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("submit callback called");
    console.log(store.getState().personalData.major);
    // var data = {
    //   first_name: store.getState().personalData.firstname,
    //   last_name: store.getState().personalData.lastname,
    //   email: store.getState().personalData.email,
    //   major: store.getState().personalData.major
    // }
    var formData = new URLSearchParams();
    formData.append('first_name', store.getState().personalData.firstname);
    formData.append('last_name', store.getState().personalData.lastname);
    formData.append('email', store.getState().personalData.email);
    formData.append('major', store.getState().personalData.major);
    console.log('formdata');
    // console.log(data)
    console.log(formData); 
    var token_url = `${ROOT_URL}/checkregistered/`;
    var page_url = tokenstore.getState().user;

    console.log('user_id ' + page_url);
    const url = token_url + page_url;
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData,
      })
      .then(response => {
        console.log(response);
        console.log("success updating updating user profile" + response);
        hashHistory.push('/dashboard');
      })
      .catch(function() {
        console.log("Error occured while updating user profile");
      });
  }

  render() {
    return (
      <div className='signUpContainer'>
        <div className='signUpContent'>
          <div className='signUpContentBox'>
            <div className='signUpContentTitle'>
              <h2>Upload a profile picture</h2>
            </div>
            <div className='signUpForm'>
              <form onSubmit={this.handleSubmit}>
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