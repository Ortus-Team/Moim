import React from 'react';
import { Link } from 'react-router';
import {POST_PERSONAL} from "../actions/ActionConstants";
import { createStore } from 'redux'
import signupReduce from '../reducers/SignUpReducer'
import { hashHistory } from 'react-router';
const store = createStore(signupReduce) // you need handle from reducer

export class SignUpContainer1 extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("submit callback called");
    event.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
    store.dispatch({
      type: POST_PERSONAL,
      payload: formData
    })
    hashHistory.push('/signup2');
  }

  onChange(e) {
    console.log(e.target.name);
  }

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
              <form onSubmit={this.handleSubmit}>
                {/* <label for="fname">First Name</label> */}
                <input type="text" ref="firstname" placeholder="First Name" onChange={this.onChange} />
                <br />
                <input type="text" ref="lastname" placeholder="Last Name" onChange={this.onChange} />
                <br />
                <input type="text" ref="email" placeholder="Email" onChange={this.onChange} />
                <br />
                <div className='signUpButton'>
                  <input type="submit" value="Next" />
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