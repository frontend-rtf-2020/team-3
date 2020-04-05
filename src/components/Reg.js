import React, { Component } from 'react';
import Guest from './Guest'
import {Switch, Route} from "react-router-dom"


export default class LogIn extends Component {
constructor(props) {
super(props);
this.state = {login: '', password: ''};

}

Roster = () => (
  <div>
    <Switch>
      <Route exact path='/guests' component={Guest}/>
    </Switch>
  </div>
)

handleSubmit() {
  window.location.assign('/guests');
}

  render() {
return (
<div>
  <form action="api/post/example">
    <label className="but" for="login">Login </label>
    <input type="register" placeholder="Придумайте логин" name="login" />
    <label className="but" for="email">Email </label>
    <input type="register" placeholder="Введите почту" name="email" />
    <label className="but" for="Password">Password </label>
    <input type="password" placeholder="Введите пароль" name="password" />
    <button className="but" type="submit" className="but" value="Войти" >Войти</button>
  
    <button className="but" ><a href='/'>Oтмена</a> </button>
  </form>


</div>
);
}
}