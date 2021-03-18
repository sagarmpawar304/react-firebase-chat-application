import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import Public from './components/PublicRouter';
import Private from './components/PrivateRouter';
import SignIn from './containers/SignIn';
import Home from './containers/home';

function App() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/signin"
          render={() => <Public>{<SignIn />}</Public>}
        />
        <Route path="/" render={() => <Private>{<Home />}</Private>} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
