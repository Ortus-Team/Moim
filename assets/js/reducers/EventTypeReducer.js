import {GET_EVENT_TYPE_LIST} from "../actions/ActionConstants";

const INITIAL_STATE = {
	eventtypes: []
};

export default function(state=INITIAL_STATE, action) {
	console.log("REDUCER CALLED");
	switch(action.type) {
		case GET_EVENT_TYPE_LIST:
			console.log("PAYLOAD DATA IN DEFAULT ");
			console.log(action.payload);
			return {...state, eventtypes: action.payload.data};
		default:
			console.log("EventTypeReducer: default condition");
			return state;
	}
} 