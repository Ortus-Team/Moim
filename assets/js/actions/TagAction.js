import {GET_TAG_LIST} from "./ActionConstants";
import {GET_TAG} from "./ActionConstants";
import { createStore } from 'redux'
import tagReduce from '../reducers/TagReducer'
const host = window.location.host;
const store = createStore(tagReduce) // you need handle from reducer

export const ROOT_URL = 'http://' + host + '/api/v1';

export function getTagList() {
	var tag_url = `${ROOT_URL}/tags`;
	const url = tag_url;

	return fetch(url)
      .then(response => {
        console.log(response);
        return response
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_TAG_LIST,
           payload: item
        }))
      )
      .catch(function() {

      });
}

export function getTag(slug) {
	var tag_url = `${ROOT_URL}/tag/`;
	var page_url = slug;
	const url = tag_url + page_url;

	return fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained a tag for slug " + slug + ": " + response);
        return response
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_TAG,
           payload: item
        }))
      )
      .catch(function() {

      });	
}