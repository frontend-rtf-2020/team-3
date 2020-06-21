import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//import "../../App.css";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./useStyles";
import ColumnComponent from "./ColumnComponent";
import InputBase from "@material-ui/core/InputBase";
//import makeStyles from '@material-ui/styles';
import { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useAuth } from "../hooks/auth.hook";
import Guest from "./Guest";
import Body from "./Body";
import { GuestDesk } from "./GuestDesk";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import { Regpage } from "./regpage";

export function CreatePage(props) {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  const { token, login, logout, userId } = useAuth();
  const [count, setCount] = useState(0);
  const [id, setId] = useState(1);

  const classes = { props };
  const sr = {
    paddingRight: 30,
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto",
  };

  return (
    <div>
      {/*хедер на замену*/}

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
