import React, { useContext } from "react";
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPage } from "./pages/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { AuthPage } from "./pages/AuthPage";
import GuestDesk from "./pages/GuestDesk";
import Body from "./pages/Body";
import {BrowserRouter as Router} from "react-router-dom"
import { Navbar} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { useHistory } from "react-router-dom";
import Guest from './pages/Guest'

const useStyles = makeStyles({
  linkstyle:{
    underline: "none",
    color: "white",
    paddingRight: 30,
    fontSize: 20,
    fontFamily: "Roboto"
  },
  appbarstyle:{
    elevation: "4",
    color: 'secondary'
  }
});



//
export const useRoutes = (isAuthentificated = false) => {
  
    
  

  
  const sr = { paddingRight: 30, fontSize: 20, color: "white" };
  
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
