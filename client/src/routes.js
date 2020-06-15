import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPage } from "./pages/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { AuthPage } from "./pages/AuthPage";
//
export const useRoutes = (isAuthentificated = false) => {
  if (isAuthentificated) {
    return (
      <Switch>
        <CreatePage />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/">
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
