import { Box } from '@mantine/core'
import {useContext} from 'react'
import { GoogleButton } from '../components'
import { scope } from '../constants'
import { AppContext } from '../Features/Context'


function Accounts() {

  const context = useContext(AppContext);
  const permissionHandler = () => {
    if (!context) return;
    if (!context.state.token) return;
    const redirectUri = `${import.meta.env.VITE_BACKEND_URL}/callback`;
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&response_type=code&state=${context.state.token}`;
    window.location.href = authUrl;
  }
  return (
    <Box h={"full"} w={"full"} style={{border: "2px solid red"}}>
      <GoogleButton onClick={permissionHandler} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} radius="xl">Authorize Your Google Accounts</GoogleButton>
    </Box>
  )
}

export default Accounts