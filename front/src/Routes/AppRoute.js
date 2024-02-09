import React from "react";
import { Route } from "react-router-dom";

/**
 * The AppRoute function is a higher-order component that renders a given component within a specified layout component.
 * @returns a JSX element, specifically a `<Route>` component.
 */
function AppRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
}
export default AppRoute;
