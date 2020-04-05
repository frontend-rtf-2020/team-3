import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import LogIn from './components/LogIn';
import Reg from './components/Reg';
import Home from './components/Home';
import Guest from './components/Guest';
import './App.css';
import logo from './components/logo2.png';
import TESTPAGE from "./components/TESTPAGE";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, FormControl, Container, Button, Form } from 'react-bootstrap';


//import Drawer from './containers/Logs/Drawer/Drawer';

function App() {
  
  return (
    <Navbar className="mr-auto" collapseOnSelect expand="md" bd="dark" variant="dark" inline> 
        <Navbar.Brand href="/">
          <img 
            src={logo}
            height="100"
            width="100"
            className="pulse"
            alt="Logo"
          />
        </Navbar.Brand>
        <Router>
          <Navbar.Collapse id="responsive-navbar-nav">   
            <Nav >
              <Nav.Link href="/" >Главная</Nav.Link>
              <Nav.Link href="/auth">Авторизация</Nav.Link>
              <Nav.Link href="/reg">Регистрация</Nav.Link>
            </Nav>
            <Switch>
              <Route path="/reg" component={Reg} />
              <Route path="/auth" component={LogIn} />        
              <Route path="/" component={Home} />
              <Route path="/guests" component={Guest} /> 
            </Switch>
           </Navbar.Collapse>   
    </Router> 
        
    </Navbar>
     
    /*
*/
  );
}

export default App;
