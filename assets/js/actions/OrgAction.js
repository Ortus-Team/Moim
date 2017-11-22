import {GET_ORGS} from "./ActionConstants";

//const host = window.location.host.split(':')[0];
const host = window.location.host;

export const ROOT_URL = 'http://' + host + '/api';

export function getOrgs() {
    var orgs_url = `${ROOT_URL}/members`;
    var page_url = "";
    const url = orgs_url + page_url;
    console.log(url);
    fetch(url)
      .then(response => {
        console.log(response);
        console.log("Successfully obtained a list of orgs" + response);
        dispatch({
           type: GET_ORGS,
           payload: response
        });
      })
      .catch(function() {

      });
}
