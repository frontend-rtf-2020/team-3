import React, {Component} from 'react';
import { TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Paper,Typography} from '@material-ui/core';
import {BrowserRouter as Route} from "react-router-dom"
import GuestDesk from './GuestDesk'

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
                <Grid item xs={3}>
        <Paper >
          <Typography>
          <TextField id="standerd-basic" label = "Имя доски" type="text" />
            <button onClick={this.MoveTo()}>Редактировать доску</button>
          </Typography>
        </Paper>
      </Grid>
        )
      }
    }
     
    export default DeskField; 
