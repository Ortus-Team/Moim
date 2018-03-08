import {GET_ORGS} from "./ActionConstants";
import {GET_ORGS_BY_CATEGORY} from "./ActionConstants";
import {GET_ORGS_BY_NAME} from "./ActionConstants";
import {POST_ORGS} from "./ActionConstants";


//const host = window.location.host.split(':')[0];
const host = window.location.host;

export const ROOT_URL = 'http://' + host + '/api/v1';

export function getOrgs() {
    var orgs_url = `${ROOT_URL}/orgs`;
    var page_url = "";
    const url = orgs_url + page_url;
    return fetch(url)
      .then(response => {
        console.log(response);
        return response
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_ORGS,
           payload: item
        }))
      )
      .catch(function() {

      });
}


export function getOrgByCategory(category) {
  var event_url = `${ROOT_URL}/orgs/category/`;
  var page_url = category;
  const url = event_url + page_url;

  return fetch(url)
      .then(response => {
        console.log(response);
        return response
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_ORGS_BY_CATEGORY,
           payload: item
        }))
      )
      .catch(function() {
        console.log("Error occured while retrieving list of orgs by category");
      }); 
}

export function postOrg(formData) {
  var org_url = `${ROOT_URL}/orgs/new/`;
  const url = org_url;

  return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData,
      })
      .then(response => {
        console.log(response);
        console.log("Successfully post org, reponse: " + response);
        store.dispatch({
           type: POST_ORG,
           payload: response
        });
      })
      .catch(function() {
        console.log("Error occured while posting orgs");
      });
}

export function getOrgByName(name) {
  var org_url = `${ROOT_URL}/org/`;
  var page_url = name;
  const url = org_url + page_url;

  return fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained org by name " + name + ": " + response);
        return response;
      })
      .then(response => response.json())
      .then(item => 
        (store.dispatch({
           type: GET_ORG_BY_NAME,
           payload: item
        }))
      )
      .catch(function() {
        console.log("Error occured while retrieving posting orgs");
      }); 
}