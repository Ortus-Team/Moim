import {GET_TOKEN} from "../actions/ActionConstants";

const INITIAL_STATE = {
	registered: false,
	user: -1
};

export default function(state=INITIAL_STATE, action) {
	console.log("REDUCER CALLED");
	switch(action.type) {
		case GET_TOKEN:
			console.log("PAYLOAD DATA IN DEFAULT ");
			console.log(action.payload);
			return {...state, user: action.payload.data, registered: true};
		default:
			console.log("TokenReducer: default condition");
			return state;
	}
} 