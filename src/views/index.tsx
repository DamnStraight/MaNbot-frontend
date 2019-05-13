import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Register from './Register';
import Login from './Login';

const isAuthenticated = () => {
  return true;
}

interface PrivateRouteProps {
  component: new (props: any) => React.Component;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      )
      }
    />
  );
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default Routes;