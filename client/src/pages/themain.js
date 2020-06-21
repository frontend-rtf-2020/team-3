import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./useStyles";
import { useState } from "react";
import { useAuth } from "../hooks/auth.hook";
import Body from "./Body";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import { Regpage } from "./regpage";

export function CreatePage(props) {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const classes = { props };
  const sr = {
    paddingRight: 30,
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto",
  };

  return (
    <div>
      <AppBar position="static" className={classes.appbarstyle}>
        <Toolbar className={classes.appbarstyle}>
          <Link href="/" style={sr}>
            Главная
          </Link>
          <Link
            href="/auth"
            className={classes.useStyles}
            style={{
              paddingRight: 30,
              fontSize: 20,
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Авторизация
          </Link>
          <Link
            href="/reg"
            className={classes.useStyles}
            style={{
              paddingRight: 30,
              fontSize: 20,
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Регистрация
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/reg">
          <Regpage />
        </Route>
      </Switch>
    </div>
  );
}

export default withStyles(useStyles)(CreatePage);
