import {GET_TOKEN} from "./ActionConstants";
import { createStore } from 'redux'
import tokenReduce from '../reducers/TokenReducer'
const host = window.location.host;
const store = createStore(tokenReduce) // you need handle from reducer

export const ROOT_URL = 'http://' + host + '/auth';

export function getUser(userResponse, provider) {
	// sej2IdmJMi3GrOcMlIzJys4TOC8ZrR5LXfoyX8xi <- id
	// 67pAkNog2zHQiYPJ2Un6rSZwb4nmKQgPbUica8Mj8GubmTieEaXeHRrgTCyGl2DVu9dz5qOUHbeeaWfhlpHjIoMtO1m0Lx13u7t8az6dVoVkChdCAkGgncPrKb3baD1L -secret
	// ya29.Gl1DBV4Mg8bQJcfYA5w2OGJ6Obuqc0FdydVW5C19z8PzkkV5K2AEDOGvjgqM6VaznTpxiQlbzvAuqc8pacarylmr5JqQU1xmXIr3-tTkJoicX78GgTKoYwfMt2Lv2sY
	console.log("GET USER FUNCTION INVOKED");
	console.log("USERTOKEN " + userResponse);
	var clientid = 'sej2IdmJMi3GrOcMlIzJys4TOC8ZrR5LXfoyX8xi'
	var orgs_url = `${ROOT_URL}/convert-token`;

	var formData = new URLSearchParams();
	if (provider == 1) { // Facebook Auth
		formData.append('grant_type', 'convert_token');
		formData.append('client_id', clientid);
		formData.append('backend', 'facebook');
		formData.append('token', userResponse.accessToken);	
	} else if (provider == 0) {
		console.log(userResponse);
		formData.append('grant_type', 'convert_token');
		formData.append('client_id', clientid);
		formData.append('backend', 'google-oauth2');
		formData.append('token', userResponse);
	}
	const url = orgs_url;
	var authresponse;
	return fetch(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formData,
		})
		.then(response => {
			
			console.log("After dispatch");
			return response
		})
		.then((response)  => response.json())
		.then((items) => 
			(fetch('http://' + host + '/api/v1/userid/' + items.access_token)
				.then(response => {
					console.log(response);
					return response
				})
				.then((response) => response.json())
				.then((userpk) => 
					(fetch('http://' + host + '/api/v1/checkregistered/' + userpk.user_id)
						.then(response => {
							return response
						})
						.then((response) => response.json())
						.then((userregister) => {
							(store.dispatch({
								type: GET_TOKEN,
								payload: userpk.user_id
							}))	
							return userregister
						})
					)	
				) 
			)
		)
		.catch(function() {
			console.log("Exception happen while getUser function");
		});
}

function registerAction(userregister) {
	if (userregister.registered == false) {
		console.log(userregister)
	} else {
		(store.dispatch({
			type: GET_TOKEN,
			payload: userpk.user_id
		}))	
	}
}