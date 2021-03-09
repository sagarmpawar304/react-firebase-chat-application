import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import For from './components/For';
import routeConfig from './routeConfig';

function App() {
  return (
    <>
      <For
        items={Object.keys(routeConfig)}
        ParentComponent={(props: any) => <Switch {...props} />}
        renderItem={(routeKey, index) => {
          // @ts-ignore
          const config = routeConfig[routeKey];
          const { Component, exact, path } = config;
          return (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => {
                const updatedProps = {
                  ...props,
                  ...config.props,
                };
                return <Component {...updatedProps} />;
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
