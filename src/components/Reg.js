import React from 'react';
//import Guest from './Desk/Guest'
//import {Switch, Route} from "react-router-dom"
import Button from '@material-ui/core/Button';
import '../App.css';
import { TextField, Paper, Typography } from '@material-ui/core';
//import { auto } from '@popperjs/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';




export default function LogIn(){
  const useStyles = makeStyles({
    tocenterstyle:{
      display: "flex",
      width: 100
    },
    paperstyle:{
      height: 450,
      width: 400,
      
    },
    typostyle:{
      align: 'center',
      fontSize: 24
    },

    buttonstyle:
    {
      background: "ff3366"
    },

    paperimgstyle:
    {
      height: 100,
      width: 100,
      
    },

    roundtry:{
      borderRadius: 25,
    }

  });

  const theme = createMuiTheme({
    palette: {
      primary: red,
    }

  }) 
/*  constructor(props) {
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
} */


const regstyles = useStyles();
  return (
    
    <div className="flx1">
      <div className="flx2">
      <Paper elevation = {3} className={regstyles.roundtry} variant = "elevation" theme={theme}>
          
          <div className="flx4">
            <div>
              <form style = {{padding: "40px"}} className="flx3" >
                
                {/* <p className = "divvv"  ><label className = "inputs" > Логин: <input type="text" name="login" value={this.state.login}  onChange={this.onChangeLogin}/></label></p>
                <p className = "divvv" > <label className = "inputs" > Email: <input type="text" name="email" value={this.state.email}  onChange={this.onChangeEmail}/></label></p>
                <p className = "divvv" ><label className = "inputs" > Пароль: <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword}/></label></p>  */}
                <Typography variant="h6"  className={regstyles.typostyle}>Регистрация</Typography>
                <p style = {{paddingBottom: "1%" }} ><TextField id="standerd-basic" label = "Логин" type="text" name = "login" /></p>
                <p style = {{paddingBottom: "1%" }}><TextField id="standerd-basic" label = "Email" type="text" name = "email"/></p>
                <p style = {{paddingBottom: "1%" }}><TextField id="standerd-basic" label = "Пароль" type="password" name = "password"/></p>
                <p style = {{paddingTop: "5%"}} ><Button className={regstyles.buttonstyle}variant="outlined" color="primary">Подтвердить</Button></p>
              </form>
            </div>
            {/* <div>
              <Paper className={regstyles.paperimgstyle} elevation = {12}>
                <Typography></Typography>
              </Paper>
            </div> */}
           
            
          </div>
          
        


      </Paper>
      <div className="regimg">

      </div>
      </div>
      
    </div>
    
    

    


);
}
