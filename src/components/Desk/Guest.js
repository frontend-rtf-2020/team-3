import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../../App.css';
import { Paper,makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  linkstyle:{
    underline: "none",
    color: "white",
    paddingRight: 30,
    fontSize: 20
  },
  appbarstyle:{
    elevation: 0,
    
  },
});


export default function Guest() {
  const linksunderline = useStyles();
  return (
    <React.Fragment>
      <div className="justifyelts">
            <AppBar position="static" className={linksunderline.appbarstyle}>
                <Toolbar className={linksunderline.appbarstyle}>   
          
                  <Link href="/" className={linksunderline.linkstyle} >Главная</Link>
                  <Link href="/guests" className={linksunderline.linkstyle} >Доска Задач</Link>
                  <Link href="/guestD" className={linksunderline.linkstyle} >Доска</Link>
                  
                  <h3 className={linksunderline.linkstyle} >UserName</h3>
                  <Link href="/" className={linksunderline.linkstyle} >Выход</Link>
                </Toolbar>
              </AppBar>
      </div>
     {/*  <div className="justifyelts">
      <Paper  elevation = {0} height = "100px" width = "100px">
        <Typography>
        <Button style = {{alignItems: 'center'}}  href="/" variant="contained">Добавить доску</Button>
            </Typography>
            </Paper>
      </div> */}
      <CssBaseline />
      
      
      <Container maxWidth="100%">
      <Button variant="outlined" color="primary">+Добавить колонку</Button>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}