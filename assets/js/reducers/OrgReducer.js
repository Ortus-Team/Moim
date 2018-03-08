import {GET_ORGS} from "../actions/ActionConstants";
import {GET_ORGS_BY_CATEGORY} from "../actions/ActionConstants";
import {GET_ORGS_BY_NAME} from "../actions/ActionConstants";
import {POST_ORGS} from "../actions/ActionConstants";


const INITIAL_STATE = {
    showOrgs: false,
    orgs: []
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
      case GET_ORGS:
          state.orgs = action.payload
          return state;
      case GET_ORGS_BY_CATEGORY:
          state.orgs = action.payload
          return state;
      case GET_ORGS_BY_NAME:
          state.orgs = action.payload
          return state;
      case POST_ORGS:
      		// double check this status code
          state.orgs = action.payload
      	   if (action.payload.status == 202) {
            state.showOrgs = true
      	  	return {...state, orgs: action.payload.data, showOrgs: true}; 	
      	   }
          return {...state, orgs: action.payload.data, showOrgs: false};
      default:
          return state;
    }
}
