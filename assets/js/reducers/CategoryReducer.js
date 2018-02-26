import {GET_CATEGORY_LIST} from "../actions/ActionConstants";

const INITIAL_STATE = {
	categories: []
};

export default function(state=INITIAL_STATE, action) {
	console.log("REDUCER CALLED");
	switch(action.type) {
		case GET_CATEGORY_LIST:
			console.log("PAYLOAD DATA IN DEFAULT ");
			console.log(action.payload);
			return {...state, categories: action.payload.data};
		default:
			console.log("CategoryReducer: default condition");
			return state;
	}
} 