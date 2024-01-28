
import { google } from "googleapis";
async function authenticateWithGoogle(code: string) {
    const clientId = '704070661946-2lc43nk1ancg0vpaqbdb76urkhpo1i12.apps.googleusercontent.com';
    const clientSecret = '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';
    const redirectUri = 'http://localhost:3000/callback';

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    return { tokens };
}

export default authenticateWithGoogle;