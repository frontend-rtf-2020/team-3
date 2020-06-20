import React from "react";

import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { DeskContext } from "./context/DeskContext";
import { useDesk } from "./hooks/desk.hook";
function App() {
  const {
    token,
    login,
    logout,
    getName,
    setName,
    setHash,
    getHash,
    userId,
  } = useAuth();
  const { dropDesk, upDesk, deskId } = useDesk();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        getName,
        setName,
        setHash,
        getHash,
        userId,
        isAuthenticated,
      }}
    >
      <DeskContext.Provider value={{ dropDesk, upDesk, deskId }}>
        <BrowserRouter>
          {isAuthenticated}
          <div>{routes}</div>
        </BrowserRouter>
      </DeskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
