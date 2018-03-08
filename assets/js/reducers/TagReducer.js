import {GET_TAG_LIST} from "../actions/ActionConstants";
import {GET_TAG} from "../actions/ActionConstants";

const INITIAL_STATE = {
	tags: [],
	currentTag: {}
};

export default function(state=INITIAL_STATE, action) {
	console.log("TAG_REDUCER CALLED");
	switch(action.type) {
		case GET_TAG_LIST:
			console.log(action.payload);
			state.tags = action.payload
			return state;
		case GET_TAG:
			console.log(action.payload);
			state.currentTag = action.payload
			return state;
		default:
			console.log("TagReducer: default condition");
			return state;
	}
} 