/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig = {
    auth: {
        clientId: "YOUR_AZURE_CLIENT_ID", // REQUIRED: You will need to supply this to make the sample app work
        authority: "https://YOUR_TENANT_DOMAIN.b2clogin.com/YOUR_TENANT_DOMAIN.onmicrosoft.com/AZURE_USER_FLOW", // REQUIRED: You will need to supply this to make the sample app work
        knownAuthorities: ['YOUR_TENANT_DOMAIN.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
        redirectUri: 'http://localhost:3000/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: 'http://localhost:3000/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginRequest = {
    scopes: ["openid", "profile"],
};