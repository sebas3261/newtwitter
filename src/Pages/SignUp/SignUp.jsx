import { LogInButton, SignUpButton } from '../../components';
import React, { useState } from 'react';
import LogoSVG from '../../assets/svg/LogoLogin.svg';
import ArrowLeftSVG from '../../assets/svg/ArrowLeft.svg';
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Crear el cuerpo de la solicitud
        const userData = {
            user: username,
            email: email,
            password: password
        };

        try {
            const response = await fetch('https://api-proyecto-twitter.vercel.app/signup', { // Cambia esto al endpoint correcto de tu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Usuario creado:', data);
                // Redirigir o mostrar mensaje de éxito
            } else {
                const errorData = await response.json();
                console.error('Error al crear el usuario:', errorData);
                alert('Error: ' + errorData);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        }
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#2B2D31] relative">
                <NavLink to ='/'>
                    <img className='absolute top-0 left-0 mt-4 ml-4 w-6 h-6' src={ArrowLeftSVG} alt="Back" />
                </NavLink>
                <div className="w-full max-w-md px-4">
                    <div className="flex justify-center">
                        <img className='LoginLogo w-48 md:w-64 h-auto' src={LogoSVG} alt="Logo"/>
                    </div>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="Username" className="text-white">Username:</label>
                            <input type="text" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Email" className="text-white">Email:</label>
                            <input type="email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Password" className="text-white">Password:</label>
                            <input type="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ConfirmPassword" className="text-white">Confirm Password:</label>
                            <input type="password" id="ConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="flex flex-col items-center justify-center text-white">
                            <div className='mb-2'>
                                <button onClick={handleSubmit} className='bg-[#626467] px-[7.5rem] py-[1rem] rounded-[7px]'>Registro</button>
                            </div>
                            <h2 className="font-bold mb-2">- or -</h2>
                            <NavLink to ='/login'>
                                <div className='mb-[3.5rem]'>
                                    <LogInButton/>
                                </div>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
