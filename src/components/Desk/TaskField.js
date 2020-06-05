import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskField extends Component {
  
    constructor(props){
      super(props);
      this.state={
        count:0
      }
    }    

      render(){
          return(
<div>
  <div>
    <label>Название задачи</label> 
    <input></input>
    <label>Описание</label><input></input>
    <label>Ответственный</label> <input></input>
    <Button onClick={this.AddTask} color="primary"><DeleteIcon /></Button>
</div>

</div>
          )
      }

}

export default TaskField;

