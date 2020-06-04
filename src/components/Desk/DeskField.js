import React, {Component} from 'react';
import { TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Paper,Typography} from '@material-ui/core';
import {BrowserRouter as Route} from "react-router-dom"
import { Button } from '@material-ui/core';
import GuestDesk from './GuestDesk'
import InputBase from '@material-ui/core/InputBase';


class DeskField extends Component {
  
    constructor(props){
      super(props);
      this.MoveTo = this.MoveTo.bind(this);
      this.state={
        count:0
      }
    }
    
      AddTask = () => {
        this.setState(({ count }) => ({
          count: count + 1,
        }));
      }
    
      MoveTo = () => {
        //window.location.assign('./GuestDesk');
      }

      render() {
        //const sr = {paddingRight: 30, fontSize: 20,color: "white",};
        return (
          <div >
            <Grid /* item xs={3} */ style = {{ paddingTop: "10px"}}>
              <Paper style = {{borderRadius: 5, backgroundColor: '#eeeeee', paddingTop: 0}}>
                <InputBase style = {{paddingLeft: "10px", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px"}}
                          // className={classes.margin}
                            defaultValue="Имя доски"
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                <Typography style = {{paddingLeft: "10px", paddingRight: "10px"}} variant="h6"  /* className={regstyles.typostyle} */>Описание:</Typography>
                <TextField fullWidth  style = {{paddingLeft: "10px", paddingRight: "10px"}} id="filled-full-width"   label = "" variant="outlined" multiline defaultValue="Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`," 
                    type="text" />
                <Button style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}} onClick={this.MoveTo()} color="primary" >Открыть доску</Button>
                <Button style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}} onClick={this.MoveTo()} disabled color="primary" >Сохранить изменения</Button>
              
              </Paper>
            </Grid>
          </div>
          
        )
      }
    }
     
    export default DeskField; 
