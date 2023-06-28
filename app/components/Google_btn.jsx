
import style from '../styles/signup.module.css'
import {useSession, signIn, signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';  

const Google_btn = () => {
  const {data : session } = useSession();
  console.log(session);
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({callbackUrl: '/signup'});
  }

  const handleLogin = async () => {
    await signIn('google', {callbackUrl: '/homepage'});
  }
  
  if(session){

    return (
      <button
      type='button'
      className='btn btn-primary'
      onClick={handleLogout}
      >Logout
      </button>
    );
  }


  return (    
    <button
    type='button'
    className={style.google_btn}
    onClick={handleLogin}
    >
        <img src="images/google.svg" alt="google icon" className={style.google_logo}/>
        Continue with Google
      </button>
    );

}

export default Google_btn