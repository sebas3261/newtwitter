import {Logo, LogInButton, SignUpButton} from'../../components'
import LogoSVG from '../../assets/svg/LogoLogin.svg';
import { useTheme } from '../../components/ThemeContext';

const Login = () => {
    const { theme } = useTheme();
    let back, letra;
    if(theme == 'dark' )
    {
        back = '#151618';
        letra = 'white';
    }
    else
    {
        back = '#FFFFFF';
        letra = 'black';
    }

    return(
        <>
            <div className={`bg-[${back}]`}>
                <div className='bg-[#2B2D31]'>
                    <div>
                        <img className='LoginLogo' src={LogoSVG} alt="Logo"/>
                        <form action="/LogIn">
                            <p>User:</p>
                            <input type="text" id="User"/>
                            <p>Pasword:</p>
                            <input type="password" id="Password"/>
                            <div className={`flex flex-col items-center justify-center text-white`}>
                            
                                <div className='mb-2 mt-4'>
                                    <LogInButton/>
                                </div>
                            
                            <h2 className={`text-${letra} font-bold`}>- or -</h2>
                            
                                <div className='mb-[3.5rem] mt-2'>
                                    <SignUpButton/>
                                </div>
                            
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login