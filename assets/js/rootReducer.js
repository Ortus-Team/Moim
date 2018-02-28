import {combineReducers} from "redux";
import OrgReducer from "./reducers/OrgReducer";
import TokenReducer from "./reducers/TokenReducer";
import TagReducer from "./reducers/TagReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import EventReducer from "./reducers/EventReducer";
import EventTypeReducer from "./reducers/EventTypeReducer";
import SignUpReducer from "./reducers/SignUpReducer";

export default combineReducers({
// add reducers here
  orgs: OrgReducer,
  user: TokenReducer,
  tags: TagReducer,
  currentTag: TagReducer,
  categories: CategoryReducer,
  events: EventReducer,
  // might have to add eventPost flag variable, not too sure if it is needed
  eventPost: EventReducer,
  eventtypes: EventTypeReducer,
  personalData: SignUpReducer,
  major: SignUpReducer,
});
