import { useContext, useEffect} from 'react'
import Authentication from '../Features/Authentication'
import {
  Anchor,
  Title,
  Text,
  Container,
} from '@mantine/core';
import {AppContext} from '../Features/Context';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context) {
      return;
    }

    if (context.state.isSigning && context.state.token) {
      navigate("/");
    }
  }, [context?.state.isSigning])
  

  return (
    <main>
      <Container size={420} my={40}>
        <Title ta="center" style={{ fontWeight: 800 }}>
          Welcome to Jarvis
        </Title>
        <Text size="xs" ta={"center"} c="dimmed">Your Personal AI Assistant ready to make you IronMan</Text>
        <Text mt={50} c="dimmed" size="md" ta="center">
          Do not have an account yet?{' '}
          <Anchor size="md" component="button">
            Create account
          </Anchor>
        </Text>
        <Authentication />
      </Container>
    </main>
  )
}

export default Signin