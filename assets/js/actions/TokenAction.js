import {GET_TOKEN} from "./ActionConstants";
import { createStore } from 'redux'
import tokenReduce from '../reducers/TokenReducer'
const host = window.location.host;
const store = createStore(tokenReduce) // you need handle from reducer

export const ROOT_URL = 'http://' + host + '/api';

export function getUser(token) {
	console.log("GET USER FUNCTION INVOKED")
	var orgs_url = `${ROOT_URL}/converttoken/`;
	var page_url = "" + token;
	const url = orgs_url + page_url;
	fetch(url)
		.then(response => {
			console.log("Convert Token API call made " + response.status);
			var tempPayload = 'This is the payload string to be passed';
			store.dispatch({
				type: GET_TOKEN,
				payload: tempPayload
			});
			console.log("After dispatch");
		})
		.catch(function() {
			console.log("Exception happen while getUser function");
		})
}