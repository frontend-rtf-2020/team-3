import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import TheMain from "./pages/themain";

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
        <TheMain />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
