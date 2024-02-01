import { } from 'react'
import Authentication from '../Features/Authentication'
import {
  Anchor,
  Title,
  Text,
  Container,
} from '@mantine/core';
function Signin() {
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