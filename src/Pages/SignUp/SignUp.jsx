import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoSVG from '../../assets/svg/LogoLogin.svg';
import ArrowLeftSVG from '../../assets/svg/ArrowLeft.svg';
import { LogInButton, SignUpButton } from '../../components';
import { useAuth } from '../../components/AuthContext';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const userData = {
            user: username,
            email: email,
            password: password,
        };

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api-proyecto-twitter.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                navigate('/login');
                alert('Usuario creado, inicie sesión');
            } else {
                const errorData = await response.json();
                console.error('Error al crear el usuario:', errorData);
                alert('Error: ' + (errorData.message || 'Unknown error occurred'));
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/feed', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#2B2D31] relative">
            <NavLink to='/'>
                <img className='absolute top-0 left-0 mt-4 ml-4 w-6 h-6' src={ArrowLeftSVG} alt="Back" />
            </NavLink>
            <div className="w-full max-w-md px-4">
                <div className="flex justify-center">
                    <img className='LoginLogo w-48 md:w-64 h-auto' src={LogoSVG} alt="Logo" />
                </div>
                <form className="mt-4" onSubmit={handleSubmit}>
                    {/* Campos del formulario */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <button type="submit" className="mb-2" disabled={isSubmitting}>
                            <SignUpButton />
                        </button>
                        <h2 className="font-bold mb-2">- or -</h2>
                        <NavLink to='/login'>
                            <div className='mb-[3.5rem]'>
                                <LogInButton />
                            </div>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
