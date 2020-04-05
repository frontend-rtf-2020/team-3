

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

    <form className="but" action="/auth/:id">
        <label className="but" for="login">Login </label>
        <input type="register" placeholder="Придумайте логин" name="login" />
        <label className="but" for="Password">Password </label>
        <input type="password" placeholder="Введите пароль" name="password" />
        <button className="but" type="submit" className="but" value="Войти" onclick={this.onclick}>Войти</button>
        <button className="but" ><a href='/'>Oтмена</a></button>
    </form>

</div>
);
}
}