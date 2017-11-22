import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';
import configureStore from './configureStore';

// import TestPageContainer from './containers/TestPageContainer';
import { HomePageContainer } from './containers/HomePageContainer';
import { DashboardPageContainer } from './containers/DashboardPageContainer';
import { EventPageContainer } from './containers/EventPageContainer';
import { GroupsPageContainer } from './containers/GroupsPageContainer';
import { EventsPageContainer } from './containers/EventsPageContainer';
import { GroupPageContainerHome } from './containers/GroupPageContainerHome';
import { GroupPageContainerEvents } from './containers/GroupPageContainerEvents';
import { GroupPageContainerPeople } from './containers/GroupPageContainerPeople';
import { GroupPageContainerGallery } from './containers/GroupPageContainerGallery';
import { SignUpContainer1 } from './containers/SignUpContainer1';
import { SignUpContainer2 } from './containers/SignUpContainer2';
import { SignUpContainer3 } from './containers/SignUpContainer3';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={HomePageContainer} />
          <Route path="/dashboard" component={DashboardPageContainer} />
          <Route path="/event" component={EventPageContainer} />
          <Route path="/groups" component={GroupsPageContainer} />
          <Route path="/events" component={EventsPageContainer} />
          <Route path="/group-home" component={GroupPageContainerHome} />
          <Route path="/group-events" component={GroupPageContainerEvents} />
          <Route path="/group-people" component={GroupPageContainerPeople} />
          <Route path="/group-gallery" component={GroupPageContainerGallery} />
          <Route path="/signup1" component={SignUpContainer1} />
          <Route path="/signup2" component={SignUpContainer2} />
          <Route path="/signup3" component={SignUpContainer3} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
