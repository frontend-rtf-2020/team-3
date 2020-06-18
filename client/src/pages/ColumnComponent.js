import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper,Typography} from '@material-ui/core';
import ReactDOM from 'react-dom';
import InputBase from '@material-ui/core/InputBase';
import { TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';
import TaskField from './TaskField'
//import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react';


 
function ColumnComponent(props) {
  
// constructor(props){
//   super(props);
//   this.state={
//     count:0
//   }
// }

const [count, setCount] = useState(0);
const [id, setId] = useState(1);

const drop = e =>{
  e.preventDefault();
  const task_id = e.dataTransfer.getData('task_id');

  const task = document.getElementById(task_id);
  task.style.display = 'block';

  e.target.appendChild(task);

}

const dragOver = e => {
  e.preventDefault();
}

    //const sr = {paddingRight: 30, fontSize: 20,color: "white",};
    return (
      <div 

      >
            <Grid /* item xs={3} */ style = {{ paddingTop: "10px"}}>
              <Paper style = {{borderRadius: 5, backgroundColor: '#eeeeee', paddingTop: 0, boxShadow: "0 0 0px"}}>
                <div style={{paddingLeft:"5px"}}>
                <InputBase fullwidth style = {{paddingLeft: "10px", paddingTop: "10px", paddingBottom: "10px", width:'90%'}}
                          // className={classes.margin}
                            defaultValue="Имя колонки"
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                <Button /*onClick={this.Destroy}*/ style = {{color:"#f9a825"}} ><DeleteIcon /></Button>
                <Button /*onClick={this.Destroy}*/ style = {{color:"#f9a825"}} >Изменить</Button>
                </div>
                <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
                  <Paper style={{backgroundColor: '#fafafa',paddingBottom:"20px",paddingTop:"10px",paddingLeft:"10px",paddingRight:"10px", boxShadow: "0px 0px 0px"}}>
                    <Typography style = {{paddingLeft: "10px", paddingRight: "10px"}} variant="h6"  /* className={regstyles.typostyle} */>Описание:</Typography>
                    <TextField fullWidth style = {{paddingLeft: "0px", paddingRight: "40px"}} id="filled-full-width"   label = "" variant="outlined" multiline defaultValue="Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`," 
                        type="text" />
                  </Paper>  
                
                </div>
                
                    
                <div style = {{paddingTop: "10px",paddingLeft:"5px", elevation: 12, boxShadow: 0}}>
                
                </div>
                


                
                <div                    
                    id = {props.id}
                    onDrop = {drop}
                    onDragOver = {dragOver}
                    >
                <TaskField id="task id" draggable = "true"/>
                {[...Array(count)].map(() => <TaskField id="task id" draggable = "true" />)}            
                </div >
                <div style = {{paddingTop: "5px",paddingLeft:"5px", elevation: 12, boxShadow: 0}}>
                <Button  onClick={() => setCount(count + 1)} color="primary">Добавить задачу</Button>
                <Button /*onClick={this.Destroy}*/ backgroundColor="#00e676">Сохранить изменения</Button>
                
                </div>
                
              </Paper>
            </Grid>
      </div>


        /* <Grid item xs={3}>
        <Paper >
          <Typography><h3>Task Name</h3>
            <button onClick={this.AddTask}>+Добавить задачу</button>
            {[...Array(this.state.count)].map(() => <textarea />)}
            <button onClick={this.Destroy}>-</button>
          </Typography>
        </Paper>
      </Grid> */
    )
  
}
 
export default ColumnComponent; 