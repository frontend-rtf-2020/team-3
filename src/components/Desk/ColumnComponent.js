import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper,Typography} from '@material-ui/core';
import ReactDOM from 'react-dom';

 
class ColumnComponent extends Component {
  
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

  Destroy = (e) => {
    // - Удаление компонента из DOM
    ReactDOM.unmountComponentAtNode(document.body);
  }

  render() {
    //const sr = {paddingRight: 30, fontSize: 20,color: "white",};
    return (
        <Grid item xs={3}>
        <Paper >
          <Typography><h3>Task Name</h3>
            <button onClick={this.AddTask}>+Добавить задачу</button>
            {[...Array(this.state.count)].map(() => <textarea />)}
            <button onClick={this.Destroy}>-</button>
          </Typography>
        </Paper>
      </Grid>
    )
  }
}
 
export default ColumnComponent; 