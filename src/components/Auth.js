export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  
  // Función para cerrar sesión
  export const logout = () => {
    localStorage.removeItem('token');
  };