import {POST_PERSONAL} from "../actions/ActionConstants";
import {POST_MAJOR} from "../actions/ActionConstants";

const INITIAL_STATE = {
	personalData: {
		firstname: '',
		lastname: '',
		email: '',
		major: ''
	},
};

export default function(state=INITIAL_STATE, action) {
	console.log("REDUCER CALLED");
	switch(action.type) {
		case POST_PERSONAL:
			console.log("POST_PERSONAL called ");
			console.log(action.payload);
			state.personalData.firstname = action.payload.firstname;
			state.personalData.lastname = action.payload.lastname;
			state.personalData.email = action.payload.email;
			console.log(state);
			return state;
		case POST_MAJOR:
			console.log("POST_MAJOR called ");
			console.log(action.payload);
			state.personalData.major = action.payload.major;
			console.log(state);
			return state;
		default:
			console.log("SignUpReducer: default condition");
			return state;
	}
} 