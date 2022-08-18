import React from 'react';
import { Route } from 'react-router-dom';

function BaseRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <div>
            <Component {...props} />
          </div>
        );
      }}
    />
  );
}

export default BaseRoute;
