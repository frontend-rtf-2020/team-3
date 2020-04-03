import React, { Component } from 'react';
import Guest from './Guest'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


export default class LogIn extends Component {
constructor(props) {
super(props);
this.state = {login: '', password: ''};

};

secondClick = () => {  
  window.location.assign('http://localhost:3000/guests');
};

onclick = () => {
  window.location.assign('http://localhost:3000');
};


render() {
return (
<div>

  <form >
    <p><label> Логин: <input type="text" name="login" value={this.state.login}  onChange={this.onChangeLogin}/></label></p>
    <p><label> Пароль: <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword}/></label></p>

    <p><button onClick={this.secondClick} >
    <Router>  
        <Link to="/guests">Войти</Link>
        <Switch>
          <Route exact path="/guests" component={Guest} />
        </Switch>
      </Router>

    </button>

    <button onClick={this.onclick} > <Link to="/">отмена</Link></button></p>
  </form>


</div>
);
}
}