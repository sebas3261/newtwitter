import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './Auth'; // Asegúrate de tener una función para verificar la autenticación

const PrivateRoute = ({ element, ...rest }) => {
  // Verifica si el usuario está autenticado
  const isAuth = isAuthenticated();

  return (
    <Route
      {...rest}
      element={isAuth ? element : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;