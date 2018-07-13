import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
export default props => {
  return (
    <Switch>
      {props.routes.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            render={location => {
              if (item.children) {
                return <item.component {...location} routes={item.children} />;
              } else {
                return <item.component {...location} />;
              }
            }}
          />
        );
      })}
      {/* 匹配默认路由 */}
      <Redirect to="/guide/home/follow" />
    </Switch>
  );
};
