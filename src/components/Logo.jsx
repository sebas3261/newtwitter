import React, { useEffect, useState } from 'react';
import LogoSVG from '../assets/svg/logo.svg';
import LogoSVGinvertido from '../assets/svg/logoinvertido.svg';
import { useTheme } from './ThemeContext';

const Logo = () => {
    const { theme } = useTheme();

    return (
        <>
            {theme === 'dark' ? (
                <img src={LogoSVG} alt="Logo" />
            ) : (
                <img  src={LogoSVGinvertido} alt="Logo" />
            )}
        </>
    );
};

export default Logo;
