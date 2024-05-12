import {Logo, LogInButton, SignUpButton} from'../../components'
import { useTheme } from '../../components/ThemeContext';
import portrait from '../../assets/Img/portrait.jpg';
import { NavLink } from 'react-router-dom'

const Home = () => {
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
                <div>
                    <div className='max-w-[10rem]'>
                        <Logo/>
                    </div>
                    <h1 className={`text-${letra}`}>Transform your words into sparks that illuminate on FlareFlow</h1>
                    <div className={`flex flex-col items-center justify-center text-${letra}`}>
                        <NavLink to ='/login'>
                            <LogInButton/>
                        </NavLink>
                        <h2>or</h2>
                        <NavLink to ='/signup'>
                            <SignUpButton/>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <img src={portrait}/>
                </div>
            </div>
        </>
    );
}

export default Home