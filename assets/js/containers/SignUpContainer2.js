import React from 'react';
import { Link } from 'react-router';
import {POST_MAJOR} from "../actions/ActionConstants";
import { createStore } from 'redux'
import signupReduce from '../reducers/SignUpReducer'
import { hashHistory } from 'react-router';
const store = createStore(signupReduce)

export class SignUpContainer2 extends React.Component {

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
      type: POST_MAJOR,
      payload: formData
    })
    hashHistory.push('/signup3');
  }

  render() {
    return (
      <div className='signUpContainer'>
        <div className='signUpContent'>
          <div className='signUpContentBox'>
            <div className='signUpContentTitle'>
              <h2>What is your major or intended major?</h2>
            </div>
            <div className='signUpForm'>
              <form onSubmit={this.handleSubmit}>
                {/* <label for="fname">First Name</label> */}
                <input type="text" ref="major" placeholder="Select One" />
                <br />
                <div className='signUpButton'>
                  <input type="submit" value="Next" />
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