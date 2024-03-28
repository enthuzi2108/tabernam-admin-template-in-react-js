import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { StateProvider } from "./dataProvider/stateManager.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Auth0Provider
    domain="dev-axo0f661tal1klot.us.auth0.com"
    clientId="2ZuZBljItVoZuh6omdmFmkttq9xyfy9F"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <ThemeProvider>
    <SidebarProvider>
    <StateProvider>
    <App />
  </StateProvider>,
    </SidebarProvider>
  </ThemeProvider>
  </Auth0Provider>
);
