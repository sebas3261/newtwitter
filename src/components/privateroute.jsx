import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de importar el contexto de autenticación

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Obtiene el estado de autenticación del contexto
  const location = useLocation(); // Obtiene la ubicación actual

  // Verifica si el usuario está autenticado
  if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de inicio de sesión y establece la cookie 'redirect' con la ubicación actual
    document.cookie = `redirect=${location.pathname}; path=/;`;
    return <Navigate to="/login" replace />;
  }

  return children; // Renderiza los hijos si el usuario está autenticado
};

export default PrivateRoute;
