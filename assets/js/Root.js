import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';
// import { Home } from './modules/Home/Home';
// import { EventPage } from './modules/EventPage/EventPage';
// import { EventsDirectory } from './modules/EventsDirectory/EventsDirectory';
// import { GroupPage } from './modules/GroupPage/GroupPage';
// import { GroupPage2 } from './modules/GroupPage2/GroupPage2';
// import { GroupsDirectory } from './modules/GroupsDirectory/GroupsDirectory';
import configureStore from './configureStore';
import HomePageContainer from './containers/HomePageContainer';
import { EventPageContainer } from './containers/EventPageContainer';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={HomePageContainer} />
          <Route path="/events" component={EventPageContainer} />

        </Router>
      </Provider>
    );
  }
}

export default Root;
