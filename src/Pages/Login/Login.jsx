import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoSVG from '../../assets/svg/LogoLogin.svg';
import ArrowLeftSVG from '../../assets/svg/ArrowLeft.svg';
import { LogInButton, SignUpButton } from '../../components';
import { useAuth } from '../../components/AuthContext';

const Login = () => {
    const [userData, setUserData] = useState({ identifier: '', password: '' });
    const [error, setError] = useState('');
    const { isAuthenticated, login } = useAuth(); // Obtener el estado de autenticación y la función de inicio de sesión del contexto de autenticación
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api-proyecto-twitter.vercel.app/login', userData);
            const { token } = response.data;
            console.log('Token de sesión:', token);
            localStorage.setItem('token', token);
            document.cookie = `token=${token}; path=/;`;
            login(userData); 
            navigate('/feed', { replace: true }); 
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError('Error en la solicitud');
            }
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/feed', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#2B2D31] relative">
                <NavLink to='/'>
                    <img className='absolute top-0 left-0 mt-4 ml-4 w-6 h-6' src={ArrowLeftSVG} alt="Back" />
                </NavLink>
                <div className="w-full max-w-md px-4">
                    <div className="flex justify-center">
                        <img className='LoginLogo w-48 md:w-64 h-auto' src={LogoSVG} alt="Logo" />
                    </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="User" className="text-white">User:</label>
                            <input
                                type="text"
                                id="User"
                                name="identifier"
                                value={userData.identifier}
                                onChange={handleChange}
                                className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Password" className="text-white">Password:</label>
                            <input
                                type="password"
                                id="Password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                                className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="flex flex-col items-center justify-center text-white">
                            <div className='mb-2'>
                                <button type="submit">
                                    <LogInButton />
                                </button>
                            </div>
                            <h2 className="font-bold mb-2">- or -</h2>
                            <NavLink to='/signup'>
                                <div className='mb-[3.5rem]'>
                                    <SignUpButton />
                                </div>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
