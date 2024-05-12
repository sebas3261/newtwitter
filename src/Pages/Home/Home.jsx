import {Logo, LogInButton, SignUpButton} from'../../components'
import portrait from '../../assets/Img/portrait.jpg';
import { NavLink } from 'react-router-dom'
import '../../assets/CSS/Home.css'

const Home = () => {
    return(
        <>
            <div className='HomeBackground'>
                <div className='HomeLogin'>
                    <div className='max-w-[10rem]'>
                        <Logo/>
                    </div>
                    <h1 className="HomeTitle ml-6 mr-6 HomeText ">Transform your words into sparks that illuminate on FlareFlow</h1>
                    <div className="flex flex-col items-center justify-center text-white">
                        <NavLink to ='/login'>
                            <div className='mb-2 mt-4'>
                                <LogInButton/>
                            </div>
                        </NavLink>
                        <h2 className="HomeText font-bold ">- or -</h2>
                        <NavLink to ='/signup'>
                            <div className='mb-[3.5rem] mt-2'>
                                <SignUpButton/>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="HomeContainer">
                    <img className="HomeImg" src={portrait}/>
                </div>
            </div>
        </>
    );
}

export default Home