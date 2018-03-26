import {GET_EVENT_TYPE_LIST} from "./ActionConstants";
import { createStore } from 'redux'
import etypeReduce from '../reducers/EventTypeReducer'
const host = window.location.host;
const store = createStore(etypeReduce) // you need handle from reducer

export const ROOT_URL = 'http://' + host + '/api/v1';

export function getEventTypeList() {
  console.log("getEventTypeList called");
  var orgs_url = `${ROOT_URL}/eventtypes`;
    var page_url = "";
    const url = orgs_url + page_url;
    console.log(url);
    return fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained a list of eventtypes" + response);
        return response;
        
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_EVENT_TYPE_LIST,
           payload: item
        }))
      )
      .catch(function() {
        console.log("exception during getEventTypeList");
      });
}