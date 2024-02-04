import { useContext, useEffect } from 'react'
import {AppContext } from "../Features/Context";
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

function Home() {
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