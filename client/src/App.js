import React from "react";

import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";

function App() {
  const { token, login, logout, userId } = useAuth();

  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <BrowserRouter>
        {isAuthenticated}
        <div>{routes}</div>;
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
