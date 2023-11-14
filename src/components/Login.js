import { useState } from 'react';
import background from '../utils/images/netflix-bg.jpeg'
import Header from './Header';
const Login = () => {

    const [isSignIn , setIsSignIn] = useState(false);
    const HandleForm = () => {
        setIsSignIn(!isSignIn)
    }

  return (
    <div>
        <Header />
        
        <div className='absolute'>
            <img src={background} alt="logo" />
        </div>
        <form className='w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : 'Sign Up'}</h1>
            {!isSignIn && (
                <input type="text" placeholder='Full name' className='p-4 my-4 w-full bg-gray-800' />
            )}
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            <button type='submit' className='p-4 my-4 bg-red-700 w-full rounded-lg'> SignIn </button>
            <p className='py-4' onClick={()=> HandleForm()}>New to Netflix? Sign Up Now</p>
        </form>
    </div>
  )
}

export default Login