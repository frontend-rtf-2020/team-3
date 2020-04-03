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
  <form >
    <p><label> Логин: <input type="text" name="login" value={this.state.login}  onChange={this.onChangeLogin}/></label></p>
    <p><label> Email: <input type="text" name="email" value={this.state.email}  onChange={this.onChangeEmail}/></label></p>
    <p><label> Пароль: <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword}/></label></p>
    <p></p><button onClick={(e) => this.handleSubmit(e)}>submit</button>    
  </form>


</div>
);
}
}