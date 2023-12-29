import React from 'react';
import { useMsal } from '@azure/msal-react';
import { Card, Button } from 'react-bootstrap';

const UserInfo = () => {
    const { accounts, instance } = useMsal();
    const account = accounts[0] || null;

    console.log(account)

    const handleLogout = () => {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    };

    return (
        <Card className="text-center mt-4">
            <Card.Body>
                {account ? (
                    <>
                        <Card.Title>Welcome, {account.idTokenClaims.name}</Card.Title>
                        <Card.Text>Email: {account.username}</Card.Text>
                        <Button variant="outline-danger" onClick={handleLogout} className="mt-3">
                            Sign out
                        </Button>
                    </>
                ) : (
                    <Card.Text>No user is signed in.</Card.Text>
                )}
            </Card.Body>
        </Card>
    );
};

export default UserInfo;