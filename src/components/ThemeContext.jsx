import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Hook personalizado para acceder al contexto del tema
export const useTheme = () => useContext(ThemeContext);

// Proveedor de contexto del tema
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = () => {
            if (darkModeMediaQuery.matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        };

        // Establecer el tema inicial
        updateTheme();

        // Escuchar cambios en el modo de color preferido
        darkModeMediaQuery.addListener(updateTheme);

        // Limpiar el listener cuando el componente se desmonta
        return () => {
            darkModeMediaQuery.removeListener(updateTheme);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};
