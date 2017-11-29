import {combineReducers} from "redux";
import OrgReducer from "./reducers/OrgReducer";


export default combineReducers({
// add reducers here
  orgs: OrgReducer
});
