import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Group,
    Button,
} from '@mantine/core';
import classes from './authentication.module.css';
import { useState } from 'react';
import { AuthAPIs } from '../../APIs';
import { IconX, IconCheck } from '@tabler/icons-react';
import { useContext } from 'react';
import { AppContext } from '../Context';

const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
import { Notification, rem } from '@mantine/core';

enum SubmissionStateType {
    Loading,
    Sucessful,
    Failure,
}

function Authentication() {

    const [signinFormState, setSigninFormState] = useState({
        email: "",
        password: "",
    });

    const [SubmissionState, setSubmissionState] = useState<{ type: SubmissionStateType, message?: string } | null>(null);
    const context = useContext(AppContext);


    const submitHandler = async () => {
        try {
            setSubmissionState({ type: SubmissionStateType.Loading });
            const response = (await AuthAPIs.Signin(signinFormState));
            const data = await response.json();

            if (response.status !== 200) {
                return setSubmissionState({ type: SubmissionStateType.Failure, message:  data.msg || "Unknown Error" });
            }
            localStorage.setItem("authorization", data.data.token);
            setSubmissionState({ type: SubmissionStateType.Sucessful, message: `Welcome back ${data.name || data.email}` });
            if (context && context.setState) {
                context.setState({
                    ...context.state,
                    isSigning: true,
                    token: data.data.token,
                })
            }

        } catch (error: any) {
            setSubmissionState({ type: SubmissionStateType.Failure, message: error.message || "Unknown Error" });
        }

    }
    return (
        <>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required value={signinFormState.email} onChange={(e) => setSigninFormState({ ...signinFormState, email: e.target.value })} />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" value={signinFormState.password} onChange={(e) => setSigninFormState({ ...signinFormState, password: e.target.value })} />
                <Group justify="space-between" mt="lg">
                    <div className={classes.custom_checkbox}>
                        <Checkbox label="Remember me" />
                    </div>
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl" onClick={submitHandler}>
                    Sign in
                </Button>
            </Paper>
            {SubmissionState?.type === SubmissionStateType.Sucessful && <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
                {SubmissionState.message || "Congrats"}
            </Notification>}

            {SubmissionState?.type === SubmissionStateType.Failure && <Notification icon={xIcon} color="red" title="Signin Error!">
                {SubmissionState.message || "Error"}
            </Notification>}


        </>
    );
}

export default Authentication;