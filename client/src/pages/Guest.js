import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../App.css';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import DeskField from './DeskField';
import TextField from '@material-ui/core/TextField';

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
        <div style = {{paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>
          <TextField
            id="outlined-full-width"
            label="Задать имя доски"
            placeholder="Имя доски"
            fullWidth
            multiline
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
                    variant="outlined"
                  />
                
                  <TextField
                    id="outlined-full-width"
                    label="Задать описание"
                    
                    placeholder="Описание доски"
                    fullWidth
                    multiline
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
              </div>
              <div style={{paddingLeft:"20px", paddingTop:"10px"}}>
              <Button  variant="outlined" color="primary" onClick={this.AddTask}>+ Добавить доску</Button>
          </div>
              

        <CssBaseline />
        
        
        
        <Container maxWidth="100%">
        <Grid container spacing={0} >
                       <Grid item xs={12} style = {{}}>
                        
                        {[...Array(this.state.count)].map(() => <DeskField />)}
                        <div style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}}>

                        </div>
                        
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
