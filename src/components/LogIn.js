import React, { Component } from 'react';


export default class LogIn extends Component {
constructor(props) {
super(props);
this.state = {login: '', password: ''};

};



onclick = () => {
  window.location.assign('http://localhost:3000/guests');
};


render() {
return (
<div>

<form  action="/auth/:id">
        <label for="login">Login </label>
        <input type="register" placeholder="Придумайте логин" name="login" />
        <p><label for="Password">Password </label>
        <input type="password" placeholder="Введите пароль" name="password" /></p>
        <button  type="submit" class="btn" value="Войти" onclick={this.onclick}></button>
      </form>
    <button ><a href='/'>Oтмена</a></button>


</div>
);
}
}