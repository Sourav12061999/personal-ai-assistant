

interface SigninData {
    email: string;
    password: string;
}
class AuthAPIs {
    static async Signin(data: SigninData) {
        const response = fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return  response;

    }
    static async TokenVerification(token: string) {
        const response = fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-token`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        return response;

    }
}

export default AuthAPIs;
