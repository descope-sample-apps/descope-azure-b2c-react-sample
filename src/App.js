import React from 'react';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import { Container } from 'react-bootstrap';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const pca = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={pca}>
      <Container className="p-5">
        <h1 className="text-center mb-4">Azure AD B2C + Descope Authentication</h1>
        <Login />
        <UserInfo />
      </Container>
    </MsalProvider>
  );
}

export default App;