import React from "react";
import { publicRoutes } from "../../router";
import { BrowserRouter as Route, Switch } from "react-router-dom";
export default function AppRouter() {
  return (
    <>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </>
  );
}
