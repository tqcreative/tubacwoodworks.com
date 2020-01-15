import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ loggedIn, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (loggedIn === true) ? (
          children
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