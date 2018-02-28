import {POST_PERSONAL} from "../actions/ActionConstants";
import {POST_MAJOR} from "../actions/ActionConstants";

const INITIAL_STATE = {
	personalData: {},
	major: {}
};

export default function(state=INITIAL_STATE, action) {
	console.log("REDUCER CALLED");
	switch(action.type) {
		case POST_PERSONAL:
			console.log("POST_PERSONAL called ");
			console.log(action.payload);
			return {...state, personalData: action.payload.data};
		case POST_MAJOR:
			console.log("POST_MAJOR called ");
			console.log(action.payload);
			return {...state, major: action.payload.data};
		default:
			console.log("SignUpReducer: default condition");
			return state;
	}
} 