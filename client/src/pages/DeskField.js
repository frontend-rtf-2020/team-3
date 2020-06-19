import React, {Component} from 'react';
import { TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Paper,Typography} from '@material-ui/core';
import { Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import GuestDesk from './GuestDesk'
import { browserHistory } from 'react-router';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Link from '@material-ui/core/Link';

class DeskField extends Component {
  
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


      render() {
        
        //const sr = {paddingRight: 30, fontSize: 20,color: "white",};
        return (
          <div style = {{ backgroundColor:"#fafafa"}} >
            <Grid /* item xs={3} */ style = {{ paddingTop: "10px"}}>
              
              <Paper style = {{borderRadius: 5, backgroundColor: '#eeeeee', paddingTop: 0}}>
                <InputBase style = {{paddingLeft: "10px", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px"}}
                          // className={classes.margin}
                            defaultValue="Имя доски"
                            fullWidth
                            multiline
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                <Typography style = {{paddingLeft: "10px", paddingRight: "10px"}} variant="h6"  /* className={regstyles.typostyle} */>Описание:</Typography>
                <TextField fullWidth  style = {{paddingLeft: "10px", paddingRight: "10px"}} id="filled-full-width"   label = "" variant="outlined" multiline defaultValue="Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`," 
                    type="text" />
                {/* <Button style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}} onClick={this.MoveTo()} color="primary" >Открыть доску</Button> */}
                <Button style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}}>
                  <Router>
                    <Link href="/guestD" style={{ textDecoration: 'none', paddingLeft:"10px" }}> Редактировать доску </Link>
                    <Switch>
                      <Route path="/guestD" component={GuestDesk} /> 
                    </Switch>
                  </Router>
                </Button>
                
                <Button style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}}  disabled color="primary" >Сохранить изменения</Button>
              
              </Paper>
            </Grid>
          </div>
          
        )
      }
    }
     
    export default DeskField; 
