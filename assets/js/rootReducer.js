import {combineReducers} from "redux";
import OrgReducer from "./reducers/OrgReducer";
import TokenReducer from "./reducers/TokenReducer";


export default combineReducers({
// add reducers here
  orgs: OrgReducer,
  user: TokenReducer
});
