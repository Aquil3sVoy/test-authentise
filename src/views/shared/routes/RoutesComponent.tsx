import React from "react";
import { Switch } from "react-router-dom";
import CustomLoadable from "src/views/shared/CustomLoadable";
import routes from "src/views/routes";
import BaseRoute from "./BaseRoute";

function RoutesComponent(props) {
  return (
    <Switch>
      {routes.routes.map((route) => (
        <BaseRoute
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
