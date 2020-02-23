import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ loggedIn, user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (loggedIn === true) ? (
          // children
          React.cloneElement(children, { user: user, loggedIn: loggedIn })
        ) : (
          (loggedIn === false) ?
          (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
          : 
          (
            <div><h1>Loading...</h1></div>
          )
        )
      }
    />
  );
}

export default PrivateRoute;