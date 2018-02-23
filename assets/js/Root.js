import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';
import configureStore from './configureStore';
import createHistory from 'history/createBrowserHistory';

// import TestPageContainer from './containers/TestPageContainer';
import { HomePageContainer } from './containers/HomePageContainer';
import { DashboardPageContainer } from './containers/DashboardPageContainer';
import { EditProfilePageContainer } from './containers/EditProfilePageContainer';
import { EventPageContainer } from './containers/EventPageContainer';
import { AdminEventPageContainer } from './containers/AdminEventPageContainer';
import { GroupsPageContainer } from './containers/GroupsPageContainer';
import { EventsPageContainer } from './containers/EventsPageContainer';

import { GroupPageContainerHome } from './containers/GroupPageContainerHome';
import { EditGroupPageContainer } from './containers/EditGroupPageContainer';
import { AdminGroupPageContainerHome } from './containers/AdminGroupPageContainerHome';
import { AdminGroupPageContainerPeople } from './containers/AdminGroupPageContainerPeople';
import { GroupPageContainerEvents } from './containers/GroupPageContainerEvents';
import { GroupPageContainerPeople } from './containers/GroupPageContainerPeople';
import { GroupPageContainerGallery } from './containers/GroupPageContainerGallery';
import { SignUpContainer1 } from './containers/SignUpContainer1';
import { SignUpContainer2 } from './containers/SignUpContainer2';
import { SignUpContainer3 } from './containers/SignUpContainer3';

const store = configureStore();
const history = createHistory();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={HomePageContainer} />
          <Route path="/dashboard" component={DashboardPageContainer} />
          <Route path="/edit-profile" component={EditProfilePageContainer} />
          <Route path="/event" component={EventPageContainer} />
          <Route path="/admin-event" component={AdminEventPageContainer} />
          <Route path="/groups" component={GroupsPageContainer} />
          <Route path="/events" component={EventsPageContainer} />
          <Route path="/group-home" component={GroupPageContainerHome} />
          <Route path="/edit-group" component={EditGroupPageContainer} />
          <Route path="/group-events" component={GroupPageContainerEvents} />
          <Route path="/group-people" component={GroupPageContainerPeople} />
          <Route path="/group-gallery" component={GroupPageContainerGallery} />
          <Route path="/admin-group-home" component={AdminGroupPageContainerHome} />
          <Route path="/admin-group-people" component={AdminGroupPageContainerPeople} />
          <Route path="/signup1" component={SignUpContainer1} />
          <Route path="/signup2" component={SignUpContainer2} />
          <Route path="/signup3" component={SignUpContainer3} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
