import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { Paper} from '@material-ui/core';

function TaskField(props) {
  
    // constructor(props){
    //   super(props);
    //   this.state={
    //     count:0
    //   }
    // }  
    
    const [count, setCount] = useState(0);

const dragStart = e => {
  const target = e.target;

  e.dataTransfer.setData('task_id', target.id);

  setTimeout(()=>{
    target.style.display = 'none';
  }, 0)
}

// const dragOver = e =>{
//     e.stopPropagnation();
// }

  return(

  <div
  id = {props.id}
  draggable={props.draggable}
  onDragStart={dragStart}
  //onDragOver={dragOver}
  >
  <div  style = {{paddingTop: "5px"}}>
    <Paper style = {{borderRadius: 3, backgroundColor: '#fafafa', paddingTop: "5px", elevation: 12, boxShadow: 0}}>
      <label>Название задачи</label> 
      <input></input>
      <label>Описание</label><input></input>
      <label>Ответственный</label> <input></input>
      <Button onClick={() => setCount(count + 1)} color="primary"><DeleteIcon /></Button>
    </Paper>
    
  </div>

</div>

          )
      

}

export default TaskField;

