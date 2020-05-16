import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import LogIn from './components/LogIn';
import Reg from './components/Reg';
import Home from './components/Home'
import Guest from './components/Guest'
//import Drawer from './containers/Logs/Drawer/Drawer';

function App() {
  
  return (
    <div>
    <Router>
      <div classsName="app">
        <ul class="menu">
          <li ><Link to="/reg" >Регистрация</Link></li>
          <li ><Link to="/auth">Авторизация</Link></li>          
          <li><Link to="/">Главная</Link></li>          
        </ul>       

      <Switch>
        <Route path="/reg" component={Reg} />
        <Route path="/auth" component={LogIn} />        
        <Route path="/" component={Home} />
        <Route path="/guests" component={Guest} /> 
      </Switch>
      </div>    
    </Router>
    </div>

  );
}

export default App;
