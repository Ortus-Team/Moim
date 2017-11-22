import {GET_ORGS} from "../actions/ActionConstants";

const INITIAL_STATE = {
    showOrgs: false,
    orgs: []
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
      case GET_ORGS:
          return {...state, orgs: action.payload.data, showOrgs: true };
      default:
          return state;
    }
}
