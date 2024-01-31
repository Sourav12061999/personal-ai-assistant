import {} from 'react'
import { scope } from '../constants';

function Home() {
  const GOOGLE_CLIENT = import.meta.env.VITE_GOOGLE_CLIENT;
  const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

  const authUser = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT}&redirect_uri=${REDIRECT_URL}&scope=${encodeURIComponent(scope)}&response_type=code`;
    window.location.href = authUrl;
  }
  return (
    <div>
      <button onClick={authUser}>Login with Gmail</button>
    </div>
  )
}

export default Home