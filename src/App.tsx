import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import For from './components/For';
import routeConfig from './routeConfig';
import Public from './components/PublicRouter';
import Private from './components/PrivateRouter';

function App() {
  return (
    <>
      <For
        items={Object.keys(routeConfig)}
        ParentComponent={(props: any) => <Switch {...props} />}
        renderItem={(routeKey, index) => {
          // @ts-ignore
          const config = routeConfig[routeKey];
          const { Component, exact, path, isPrivate } = config;
          return (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={props => {
                const updatedProps = {
                  ...props,
                  ...config.props,
                };
                return isPrivate ? (
                  <Private>
                    <Component {...updatedProps} />
                  </Private>
                ) : (
                  <Public>
                    <Component {...updatedProps} />
                  </Public>
                );
              }}
            />
          );
        }}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
