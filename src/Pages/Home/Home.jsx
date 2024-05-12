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
                    <h1 className={`text-${letra} text-2xl ml-6 mr-6`}>Transform your words into sparks that illuminate on FlareFlow</h1>
                    <div className={`flex flex-col items-center justify-center text-white`}>
                        <NavLink to ='/login'>
                            <div className='mb-2 mt-4'>
                                <LogInButton/>
                            </div>
                        </NavLink>
                        <h2 className={`text-${letra} font-bold`}>- or -</h2>
                        <NavLink to ='/signup'>
                            <div className='mb-[3.5rem] mt-2'>
                                <SignUpButton/>
                            </div>
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