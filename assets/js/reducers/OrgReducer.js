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
          return {...state, orgs: action.payload.data, showOrgs: true };
      case GET_ORGS_BY_CATEGORY:
          return {...state, orgs: action.payload.data, showOrgs: false};
      case GET_ORGS_BY_NAME:
          return {...state, orgs: action.payload.data, showOrgs: false};
      case POST_ORGS:
      		// double check this status code
      	   if (action.payload.status == 202) {
      	  	return {...state, orgs: action.payload.data, showOrgs: true}; 	
      	   }
          return {...state, orgs: action.payload.data, showOrgs: false};
      default:
          return state;
    }
}
