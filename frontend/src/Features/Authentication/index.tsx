import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import classes from './authentication.module.css';

function Authentication() {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome to Jarvis
            </Title>
            <Text size="xs" ta={"center"} c="dimmed">Your Personal AI Assistant ready to make you IronMan</Text>
            <Text mt={50} c="dimmed" size="md" ta="center">
                Do not have an account yet?{' '}
                <Anchor size="md" component="button">
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group justify="space-between" mt="lg">
                    <div className={classes.custom_checkbox}>
                        <Checkbox label="Remember me" />
                    </div>
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

export default Authentication;