import { LogInButton, SignUpButton } from '../../components';
import LogoSVG from '../../assets/svg/LogoLogin.svg';
import ArrowLeftSVG from '../../assets/svg/ArrowLeft.svg';
import { NavLink } from 'react-router-dom'

const SignUp = () => {
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
                    <form action="/SignUp" className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="Username" className="text-white">Username:</label>
                            <input type="text" id="Username" className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Email" className="text-white">Email:</label>
                            <input type="email" id="Email" className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Password" className="text-white">Password:</label>
                            <input type="password" id="Password" className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ConfirmPassword" className="text-white">Confirm Password:</label>
                            <input type="password" id="ConfirmPassword" className="block w-full md:w-full lg:w-96 h-10 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <div className="flex flex-col items-center justify-center text-white">
                            <div className='mb-2'>
                                <SignUpButton/>
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
