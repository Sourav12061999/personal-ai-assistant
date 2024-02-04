import { useContext, useEffect } from 'react'
import { scope } from '../constants';
import {AppContext } from "../Features/Context";
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

function Home() {
  // const GOOGLE_CLIENT = import.meta.env.VITE_GOOGLE_CLIENT;
  // const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

  // const authUser = () => {
  //   const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT}&redirect_uri=${REDIRECT_URL}&scope=${encodeURIComponent(scope)}&response_type=code`;
  //   window.location.href = authUrl;
  // }

  const context = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context) return;

    if (context.state.isSigning === false) {
      navigate("/signin");
    }
    
  }, []);
  return (
    <Box>
      <h1>Home</h1>
    </Box>
  )
}

export default Home