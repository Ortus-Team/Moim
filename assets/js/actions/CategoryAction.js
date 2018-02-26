import {GET_CATEGORY_LIST} from "./ActionConstants";
import { createStore } from 'redux'
import categoryReduce from '../reducers/CategoryReducer'
const host = window.location.host;
const store = createStore(categoryReduce) // you need handle from reducer

export const ROOT_URL = 'http://' + host + '/api/v1';

export function getCategoryList() {
  console.log("getCategoryList called");
	var orgs_url = `${ROOT_URL}/categories`;
    var page_url = "";
    const url = orgs_url + page_url;
    console.log(url);
    return fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained a list of categories" + response);
        return response;
        
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_CATEGORY_LIST,
           payload: item
        }))
      )
      .catch(function() {
        console.log("exception during getCategoryList");
      });
}