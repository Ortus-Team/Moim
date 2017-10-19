import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';
import configureStore from './configureStore';

// import TestPageContainer from './containers/TestPageContainer';
import { HomePageContainer } from './containers/HomePageContainer';
import { EventPageContainer } from './containers/EventPageContainer';
import { GroupsPageContainer } from './containers/GroupsPageContainer';
import { EventsPageContainer } from './containers/EventsPageContainer';
import { GroupPageContainer } from './containers/GroupPageContainer';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={HomePageContainer} />
          <Route path="/event" component={EventPageContainer} />
          <Route path="/groups" component={GroupsPageContainer} />
          <Route path="/events" component={EventsPageContainer} />
          <Route path="/group" component={GroupPageContainer} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
