import {} from 'react'
import { scope } from '../constants';
import Sidebar from '../Features/Sidebar';
import Navbar from '../Features/Navbar';

function Home() {
  // const GOOGLE_CLIENT = import.meta.env.VITE_GOOGLE_CLIENT;
  // const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

  // const authUser = () => {
  //   const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT}&redirect_uri=${REDIRECT_URL}&scope=${encodeURIComponent(scope)}&response_type=code`;
  //   window.location.href = authUrl;
  // }
  return (
    <main>
      {/* <button onClick={authUser}>Login with Gmail</button> */}
      {/* <Navbar/> */}
      <Sidebar/>
    </main>
  )
}

export default Home