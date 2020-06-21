import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./useStyles";
import { useState } from "react";
import { useAuth } from "../hooks/auth.hook";
import Guest from "./Guest";
import Body from "./Body";
import { GuestDesk } from "./GuestDesk";
import { Switch, Route } from "react-router-dom";
import { useDesk } from "../hooks/desk.hook";
import { DeskContext } from "../context/DeskContext";

export function CreatePage(props) {
  const history = useHistory();
  const { deleteDesk } = useDesk();
  const { getName } = useAuth();
  const auth = useContext(AuthContext);
  const Desk = useContext(DeskContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    deleteDesk();
    history.push("/");
  };

  const classes = { props };
  const sr = {
    paddingRight: 30,
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto",
  };

  return (
    <div>
      <AppBar
        position="static"
        className={classes.appbarstyle}
        style={{ boxShadow: "0px 0px 0px 0px" }}
      >
        <Toolbar className={classes.appbarstyle}>
          <Link href="/" style={sr}>
            Главная
          </Link>
          <Link
            href="/guests"
            className={classes.useStyles}
            style={{
              paddingRight: 30,
              fontSize: 20,
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Список досок
          </Link>

          <Link
            href="/guestD"
            className={classes.linkstyle}
            style={{
              paddingRight: 30,
              fontSize: 20,
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            {Desk.upDesk().deskName}
          </Link>
          <h3
            className={classes.linkstyle}
            style={{
              paddingRight: 30,
              fontSize: 20,
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            {getName()}
          </h3>
          <Link
            href="/"
            className={classes.linkstyle}
            onClick={logoutHandler}
            style={{
              paddingRight: 30,
              fontSize: 20,
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Выход
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/guests" component={Guest} />
        <Route path="/guestD">
          <GuestDesk />
        </Route>
      </Switch>
    </div>
  );
}

export default withStyles(useStyles)(CreatePage);
