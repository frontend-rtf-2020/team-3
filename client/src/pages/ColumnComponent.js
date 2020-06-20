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
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
 
function ColumnComponent(props) {

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }
  console.log(props.users);
  const users = ['Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',];//props.users;

const [column, setColumn] = useState(props.column);
const [count, setCount] = useState(0);

const onColumnChange = (event) => {
  setColumn({
    ...column, [event.target.id]:event.target.value
  })
}

const deleteColumn = () => {

}

const saveButton = async () => {
  console.log(column);
}

const addTask = (event) => {
  column.tasks.push({
    name:"123",
    description:"321",
    owner: undefined,
    id:count
  });
  console.log(column.tasks);
  setCount(count+1)
}



const deleteTask = (event) => {
  for (let i = 0; i < column.task.length; i++) {
    let obj = column.task[i];
    if (obj.id === event.id) {
        column.tasks.splice(i, 1);
        break;
    }
}
}

//dnd
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

const theme = useTheme();
const classes = useStyles();

    return (
      <div style={{paddingBottom: "100px"}}>
        <Grid /* item xs={3} */ style = {{ paddingTop: "10px"}}>
          <Paper style = {{borderRadius: 5, backgroundColor: '#eeeeee', paddingBottom: "20px", boxShadow: "0 0 1px"}}>
            <div style={{paddingLeft:"5px"}}>
              <InputBase 
                fullwidth style = {{paddingLeft: "10px", paddingTop: "10px", paddingBottom: "10px", width:'90%'}}
                id = "name"
                onChange={onColumnChange}
                value={column.name}
                inputProps={{ 'aria-label': 'naked' }}
              />
              <Button onClick={deleteColumn} style = {{color:"#f9a825"}} ><DeleteIcon /></Button>
              <Button  style = {{color:"#f9a825"}} >Изменить</Button>
            </div>
            <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
              <Paper style={{backgroundColor: '#fafafa',paddingBottom:"20px",paddingTop:"10px",paddingLeft:"10px",paddingRight:"10px", boxShadow: "0px 0px 1px 1px grey"}}>
                <Typography style = {{paddingLeft: "10px", paddingRight: "10px"}} variant="h6"  >Описание:</Typography>
                  <TextField fullWidth style = {{paddingLeft: "0px", paddingRight: "40px"}}
                  onChange={onColumnChange}
                  id="description"
                  label = ""
                  variant="outlined"
                  value={column.description}
                  multiline
                  type="text" />
              </Paper>      
            </div>
            
            <div style = {{paddingTop: "5px",paddingLeft:"5px", elevation: 12, boxShadow: 0}}>
                <Button backgroundColor="primary" onClick={saveButton}>Сохранить изменения</Button>
            </div>

            {/* добавление задачи */}
            
            <div style={{paddingLeft:"10px", paddingRight:"10px", paddingTop:"60px"}}>
              <Paper style = {{borderRadius: 3, backgroundColor: '#fafafa', paddingTop: "15px",paddingLeft:"10px", elevation: 12, boxShadow: "0px 0px 1px 1px grey"}}>
                <Typography style = {{paddingLeft: "0px", paddingRight: "10px", paddingTop: "15px"}} variant="h6"  >Добавить задачу</Typography>
                <div style={{paddingRight:"10px"}}>
                  <TextField
                    id="name"
                    label="Изменить имя"
                    fullWidth
                    placeholder="Имя задачи"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div style={{paddingRight:"10px"}}>
                  <TextField
                    id="description"
                    label="Задать описание"
                    placeholder="Описание задачи"
                    fullWidth
                    multiline
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div style={{paddingTop:"20px"}}>
                    {/* {desk.filters.map((filter)=> */}
                <div style={{paddingRight: "10px", paddingTop: "15px", float:"left"}}>
                            <Chip /* label={filter.name} */ onDelete={() => {}} />
                          </div>
                          <div style={{paddingRight: "10px",paddingBottom: "0px", float:"left"}}>
                            <TextField 
                              placeholder="Фильтр"
                              inputProps={{ "aria-label": "naked" }}
                              variant="standard"
                              label="Добавить фильтр"
                              size="small"
                              width="30%"
                              />
                          </div>
                          <div style={{paddingRight: "10px", paddingTop: "15px",float:"left",}}>
                            <Button  size="small" color="primary">
                              Подтвердить
                            </Button>
                          </div>
                </div>
                
                <div style = {{display: "block", paddingBottom:"20px"}}>
                <FormControl style={{width:"100%"}}  >
                  <InputLabel >Ответственный</InputLabel>
                  <Select
                      labelId="demo-mutiple-name-label"
                      id="demo-mutiple-name"
                      onChange={() => {}}
                      input={<Input />}
                  >
                    {users.map((user) => (
                        <MenuItem key={user} value={user}>
                          {user}
                        </MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </div>

                  
                 
      </Paper>


                  
            </div>
              <div style = {{paddingTop: "5px",paddingLeft:"5px", elevation: 12, boxShadow: 0}}>
                <Button  onClick={addTask} color="primary">Добавить задачу</Button>
              </div>
            <div >
              <Typography style = {{paddingLeft: "20px",paddingTop: "10px"}} variant="h6"  >Задачи:</Typography>
            </div>

            <div style={{paddingTop:"0px"}} id = {props.id} onDrop = {drop} onDragOver = {dragOver}>
                    {column.tasks.map((task) => <TaskField task={task} deleteHandler={deleteTask}  draggable = "true" />)}            
                  </div >

            
                
          </Paper>
        </Grid>
      </div>
    )
}
 
export default ColumnComponent; 