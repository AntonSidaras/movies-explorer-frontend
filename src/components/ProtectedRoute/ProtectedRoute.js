import React from 'react';
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function ProtectedRoute({ children }) {
  const user = React.useContext(CurrentUserContext); // получаем значения из контекста
  return user.isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;