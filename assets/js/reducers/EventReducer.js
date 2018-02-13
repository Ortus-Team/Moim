import {GET_EVENT_LIST} from "../actions/ActionConstants";
import {GET_EVENT_BY_TAG} from "../actions/ActionConstants";
import {GET_EVENT_BY_CATEGORY} from "../actions/ActionConstants";
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
          return {...state, orgs: action.payload.data, eventPost: false};
      case GET_EVENT_BY_TAG:
          return {...state, orgs: action.payload.data, eventPost: false};
      case GET_EVENT_BY_CATEGORY:
          return {...state, orgs: action.payload.data, eventPost: false};
      case GET_EVENT_BY_SLUG:
          return {...state, orgs: action.payload.data, eventPost: false};
      case POST_EVENT:
      		// double check this status code
      	   if (action.payload.status == 202) {
      	  	return {...state, orgs: action.payload.data, eventPost: true}; 	
      	   }
          return {...state, orgs: action.payload.data, eventPost: false};
      default:
          return state;
    }
}