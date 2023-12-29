![Azure B2C and Descope Banner](https://github.com/descope-sample-apps/descope-azure-b2c-react-sample/assets/32936811/425ac418-b8d6-4031-bafd-808bfc3e51bb)

---

# Azure AD B2C + Descope React Sample App

This open-source sample app, built with React, demonstrates integration with Azure AD B2C and Descope for authentication. The application showcases the use of Azure AD B2C for user authentication in a React application, leveraging MSAL React hooks.

Before running the app, you'll need to configure Azure AD B2C and Descope as per the instructions provided [here](https://docs.descope.com/knowledgebase/sso/azureoidc/). 

## Table of Contents 📝

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Configuring Azure AD B2C and Descope](#configuring-azure-ad-b2c-and-descope)
5. [Issue Reporting](#issue-reporting)
6. [License](#license)

## Features ✨

- **Azure AD B2C Integration**: Seamless integration with Azure AD B2C for user authentication.
- **Descope Authentication**: Leverage Descope as a federated identity provider.
- **React MSAL Usage**: Utilization of MSAL React hooks for handling authentication flows.

## Installation 💿

Clone the repository:

```bash
git clone https://github.com/descope-sample-apps/azure-b2c-react-sample-app.git
```

Install dependencies:

```bash
npm install
# or
yarn install
```

## Configuring Authentication Settings

Open `src/authConfig.js` and replace the placeholder values with your actual Azure AD B2C settings:

- **clientId**: Your Azure AD B2C application client ID.
- **authority**: Your Azure AD B2C authority URL.
- **knownAuthorities**: Your Azure AD B2C tenant domain.

## Running the Application 🚀

To start the application:

```bash
npm start
# or
yarn start
```

Navigate to `http://localhost:3000/` in your browser.

## Configuring Azure AD B2C and Descope

Ensure you have correctly configured Azure AD B2C and Descope. Follow the detailed guide [here](https://docs.descope.com/knowledgebase/sso/azureoidc/) for instructions on setting up Azure AD B2C Tenant, registering the application, and configuring Descope as an Identity Provider.

## Issue Reporting ⚠️

For any issues or suggestions, please [open an issue](https://github.com/descope-sample-apps/azure-b2c-react-sample-app/issues) on GitHub.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
