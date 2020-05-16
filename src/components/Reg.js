import React, { Component } from 'react';
import Guest from './Guest'
import {Switch, Route} from "react-router-dom"


export default class LogIn extends Component {
constructor(props) {
super(props);
this.state = {login: '',email: '', password: ''};
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
        <label for="login">Login </label>
        <input type="register" placeholder="Придумайте логин" name="login" />
        <p><label for="email">Email </label>
        <input type="register" placeholder="Введите почту" name="email" /></p>
        <p><label for="Password">Password </label>
        <input type="password" placeholder="Введите пароль" name="password" /></p>
        <input type="submit" class="btn" value="Отправить"/>
      </form>
    <button><a href='/'>Oтмена</a> </button>


</div>
);
}
}