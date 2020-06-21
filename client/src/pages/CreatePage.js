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
import { useDesk } from "../hooks/desk.hook";
import { DeskContext } from "../context/DeskContext";

export function CreatePage(props) {
  const history = useHistory();
  const { dropDesk, upDesk, deleteDesk, DeskId } = useDesk();
  const { login, logout, getName, setName, token, userId } = useAuth();
  const auth = useContext(AuthContext);
  const Desk = useContext(DeskContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    deleteDesk();
    history.push("/");
  };
  // constructor(props) {
  //   super(props);
  //   //this.AddTask = this.AddTask.bind(this);
  //   this.state = {
  //     name:'',
  //     tags:'',
  //     count: 0,
  //     description: '',
  //     owner:''
  //   }
  // }
  // AddTask = () => {
  //   this.setState(({ count }) => ({
  //     count: count + 1,
  //   }));
  // }
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
          {/*           <Link
            href="/guestD"
            className={classes.linkstyle}
            style={{ paddingRight: 30, fontSize: 20, color: "white", fontFamily:"Roboto"  }}
          >
            Доска
          </Link> */}

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
