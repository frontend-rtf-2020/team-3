import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../../App.css';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import DeskField from './DeskField';

export default class LogIns extends React.Component{

  constructor(props){
    super(props);
    this.state={
      count:0
    
    }
    
  }
  
    AddTask = () => {
      this.setState(({ count }) => ({
        count: count + 1,
      }));
    }

  render(){

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

    //auth = false;
    return(
              <React.Fragment>

        <div className="justifyelts" style = {{paddingRight: 30}}>
              <AppBar position="static" /* className={linksunderline.appbarstyle} */>
                  <Toolbar /* className={linksunderline.appbarstyle }*/>   
            
                    <Link href="/" /* className={linksunderline.linkstyle} */ style = {{paddingRight: 30, fontSize: 20,color: "white",}}>Главная</Link>
                    <Link href="/guests" /* className={linksunderline.linkstyle} */ style = {{paddingRight: 30, fontSize: 20,color: "white",}} >Доска Задач</Link>
                    <Link href="/guestD" /* className={linksunderline.linkstyle} */ style = {{paddingRight: 30, fontSize: 20,color: "white",}}>Доска</Link>
                    
                    <h3 /* className={linksunderline.linkstyle} */ style = {{paddingRight: 30, fontSize: 20}}>UserName</h3>
                    <Link href="/" /* className={linksunderline.linkstyle} */ style = {{paddingRight: 30, fontSize: 20,color: "white",}} >Выход</Link>
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
        <Grid container spacing={0} >
                       <Grid item xs={12} style = {{ paddingTop: "20px"}}>
                        
                        {[...Array(this.state.count)].map(() => <DeskField />)}
                        <div style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}}>

                        </div>
                        <Button  variant="outlined" color="primary" onClick={this.AddTask}>+ Добавить доску</Button>
                      </Grid>
                      </Grid>

        {/* </Grid><Button variant="outlined" color="primary">+Добавить доску</Button>  */}
         {/*  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            
          </Typography> */}
        </Container>
      </React.Fragment>
    );
  }
}
