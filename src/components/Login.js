import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { Button } from 'react-bootstrap';

const Login = () => {
    const { instance, accounts } = useMsal();

    const handleLogin = (loginType) => {
        const request = {
            ...loginRequest,
            prompt: loginType === 'popup' ? 'select_account' : 'login',
        };

        if (loginType === 'popup') {
            instance.loginPopup(request).catch(e => {
                console.error(e);
            });
        } else {
            instance.loginRedirect(request).catch(e => {
                console.error(e);
            });
        }
    };

    // If user is not logged in
    if (accounts.length > 0) {
        return null;
    }

    return (
        <div className="text-center mt-4">
            <Button variant="primary" onClick={() => handleLogin('popup')} className="m-2">
                Sign in using Popup
            </Button>
            <Button variant="secondary" onClick={() => handleLogin('redirect')}>
                Sign in using Redirect
            </Button>
        </div>
    );
};

export default Login;