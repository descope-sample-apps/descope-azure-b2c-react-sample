import React from 'react';
import { useMsal } from '@azure/msal-react';
import { Button } from 'react-bootstrap';

const Logout = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutRedirect().catch(e => {
            console.error(e);
        });
    };

    return (
        <Button variant="outline-danger" onClick={handleLogout} className="mt-3">
            Sign out
        </Button>
    );
};

export default Logout;