import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LogIn from './components/LogIn.jsx';
import Reg from './components/Reg.jsx';
import Guest from './components/Desk/Guest'
import Body from './components/Body'
import GuestDesk from './components/Desk/GuestDesk'
import { Navbar} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import { useState } from 'react';



//import Drawer from './containers/Logs/Drawer/Drawer';

const useStyles = makeStyles({
  linkstyle:{
    underline: "none",
    color: "white",
    paddingRight: 30,
    fontSize: 20
  },
  appbarstyle:{
    elevation: "4",
    color: 'secondary'
  }
});

function CheckUser(props){
  const linksunderline = useStyles();
  const auth = props.auth;
  if(auth === false)
  {
     return null
  }
  else return <nav>
           <Link href="/auth" className={linksunderline.linkstyle} >Авторизация</Link>

          <Link href="/reg"  className={linksunderline.linkstyle} >Регистрация</Link>
         </nav> 
}

export default function App(){
  const linksunderline = useStyles();
  let [auth,setState] = useState(true);
  //let [cons,setS] = useState(1);

  const setF = () => {
    setState(false);
    console.log(auth);
  };

  // const handleClick = () => {
  //   setS(0);
  // }

  return (
    <div>
    <Router >
      <Navbar.Collapse id="responsive-navbar-nav" >
        <AppBar position="static" className={linksunderline.appbarstyle}  style={{ сolor: '#fafafa'}}>
          <Toolbar className={linksunderline.appbarstyle} >   
            <Link href="/" className={linksunderline.linkstyle}  >Главная</Link>
            {/* <Link href="/auth" className={linksunderline.linkstyle} >Авторизация</Link> 
            <Link href="/reg"  className={linksunderline.linkstyle} >Регистрация</Link> */}
            <CheckUser auth={auth}/>
            <Link href="/guests" onClick={setF} className={linksunderline.linkstyle} >Доска Задач</Link>
            <Link href="/guestD" onClick={() => setState(false)} className={linksunderline.linkstyle} >Доска </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/reg" component={Reg} />
          <Route path="/auth" component={LogIn} />   
          <Route path="/guests" component={Guest} /> 
          <Route path="/guestD" component={GuestDesk} /> 
        </Switch>
      </Navbar.Collapse>  
      
      {/* <render={(props) => <Guest auth={auth} {...props} />}  */}
    </Router> 
    
    </div>
);
}
