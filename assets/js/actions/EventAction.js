import {GET_EVENT_LIST} from "./ActionConstants";
import {GET_EVENT_BY_TAG} from "./ActionConstants";
import {GET_EVENT_BY_CATEGORY} from "./ActionConstants";
import {GET_EVENT_BY_SLUG} from "./ActionConstants";
import {POST_EVENT} from "./ActionConstants";
import { createStore } from 'redux'
import eventReduce from '../reducers/EventReducer'
const host = window.location.host;
const store = createStore(eventReduce) // you need handle from reducer

export const ROOT_URL = 'http://' + host + '/api/v1';

export function getEventList() {
	var event_url = `${ROOT_URL}/events`;
	const url = event_url;

	return fetch(url)
      .then(response => {
        console.log(response);
        return response
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_EVENT_LIST,
           payload: item
        }))
      )
      .catch(function() {
        console.log("Error occured while retrieving list of events");
      });
}

export function getEventByToken(tag) {
	var event_url = `${ROOT_URL}/events/tag/`;
	var page_url = tag;
	const url = event_url + page_url;

	return fetch(url)
      .then(response => {
        console.log(response);
        return response
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_EVENT_BY_TAG,
           payload: item
        }))
      )
      .catch(function() {
        console.log("Error occured while retrieving list of events by tag");
      });	
}

export function getEventByCategory(category) {
  var event_url = `${ROOT_URL}/category/`;
  var page_url = category;
  const url = event_url + page_url;

  return fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained events by category " + category + ": " + response);
        return response;
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_EVENT_BY_CATEGORY,
           payload: item
        }))
      )
      .catch(function() {
        console.log("Error occured while retrieving list of events by category");
      }); 
}

export function postEvent(formData) {
  var event_url = `${ROOT_URL}/events/new/`;
  const url = event_url;

  return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData,
      })
      .then(response => {
        console.log(response);
        console.log("Successfully post event, reponse: " + response);
        store.dispatch({
           type: POST_EVENT,
           payload: response
        });
      })
      .catch(function() {
        console.log("Error occured while retrieving list of events by category");
      });

}

export function getEventBySlug(slug) {
  var event_url = `${ROOT_URL}/event/`;
  var page_url = slug;
  const url = event_url + page_url;

  return fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained events by slug " + slug + ": " + response);
        return response;
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_EVENT_BY_SLUG,
           payload: item
        }))
      )
      .catch(function() {
        console.log("Error occured while retrieving list of events by category");
      }); 
}