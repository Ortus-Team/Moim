import {GET_EVENT_LIST} from "../actions/ActionConstants";
import {GET_EVENT_BY_TAG} from "../actions/ActionConstants";
import {GET_EVENT_BY_TYPE} from "../actions/ActionConstants";
import {GET_EVENT_BY_SLUG} from "../actions/ActionConstants";
import {POST_EVENT} from "../actions/ActionConstants";

const INITIAL_STATE = {
	eventPost: false,
  events: []
};

export default function(state=INITIAL_STATE, action) {
    console.log(action.payload);
    switch(action.type) {
      case GET_EVENT_LIST:
        state.events = action.payload;
        return state;
      case GET_EVENT_BY_TAG:
        state.events = action.payload; 
        return events;
      case GET_EVENT_BY_TYPE:
        state.events = action.payload;
        return state;
      case GET_EVENT_BY_SLUG:
        state.events = action.payload;
        return state;
      case POST_EVENT:
    		// double check this status code
    	  if (action.payload.status == 202) {
          state.eventPost = true
    	    return state; 	
    	  }
        return state;
      default:
        return state;
    }
}