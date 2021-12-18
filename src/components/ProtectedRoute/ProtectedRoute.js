import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = React.useContext(CurrentUserContext); // получаем значения из контекста
  return (
    <Route {...rest} render={
      props => {
        if (user.isloggedIn) {
          return <Component {...rest} {...props} />
        }
        else {
          return <Navigate to={'/signin'} />
        }
      }
    } />
  )
};

export default ProtectedRoute;