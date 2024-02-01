

interface SigninData {
    email: string;
    password: string;
}
class AuthAPIs {
    static async Signin(data: SigninData) {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return await response.json();

    }
}

export default AuthAPIs;
