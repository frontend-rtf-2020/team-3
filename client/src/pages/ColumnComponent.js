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
import {useHttp} from "../hooks/http.hook";
 
function ColumnComponent(props) {

  const { request } = useHttp();

  const [column, setColumn] = useState(props.column);
  const [users, setUsers] = useState(props.users)
  const [task, setTask] = useState({name:"", description: "", owner: undefined})

  const onColumnChange = (event) => {
    setColumn({
      ...column, [event.target.name]:event.target.value
    })
  }
  
  const taskChangeHandler = (event) => {
    setTask({
      ...task, [event.target.name]:event.target.value
    });
  }

  const taskOwnerSelector = (event) => {
    setTask({
      ...task, owner:event.target.value
    });
  }

  const deleteColumn = () => {
    props.delete();
  }

  const updateColumnInfo = () => {
    request("/api/table/updateColumn", "POST",
        { tableId: props.deskId, column: props.index, name: column.name, description: column.description})
  }

  const addTaskDb = (name, description, owner) => {
    request("/api/table/addTask", "POST",
        { tableId: props.deskId, column: props.index, name: name, description: description, owner: owner})
  }

  const addTask = () => {
    const newTasks = [...column.tasks];
    newTasks.push(task);
    setColumn({...column, tasks: newTasks});
    addTaskDb(task.name, task.description, task.owner);
    setTask({name:"", description: "", owner: undefined});
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

  return (
    <div style={{paddingBottom: "30px", width: "40%"}}>
      <Grid style = {{ paddingTop: "10px"}}>
        <Paper style = {{borderRadius: 5, backgroundColor: '#eeeeee', paddingBottom: "20px", boxShadow: "0 0 1px"}}>
          <div style={{padding: "10px"}}>
            <Paper style={{backgroundColor: '#fafafa',paddingBottom:"20px",paddingTop:"10px",paddingLeft:"10px",paddingRight:"10px", boxShadow: "0px 0px 1px 1px grey"}}>
              <div style = {{paddingLeft: "5px", paddingDown: "15px", paddingRight: "10px"}}>
                <Typography style = {{paddingLeft: "5px",paddingDown: "15px", fontSize: "25px"}} >
                  Название колонки
                </Typography>

                <TextField fullWidth
                           style = {{paddingUp: "15px"}}
                           onChange={onColumnChange}
                           name="name"
                           variant="outlined"
                           value={column.name}
                           multiline
                           type="text" />
              </div>

              <div style = {{paddingLeft: "5px", paddingUp: "25px", paddingRight: "10px"}}>
                <Typography style = {{paddingLeft: "5px", fontSize: "20px" }} >
                  Описание колонки
                </Typography>

                <TextField fullWidth style = {{paddingUp: "15px"}}
                           onChange={onColumnChange}
                           name="description"
                           variant="outlined"
                           value={column.description}
                           multiline
                           type="text"
                />
              </div>
            </Paper>
          </div>

          <div style = {{paddingLeft:"10px", elevation: 12, boxShadow: 0}}>
              <Button backgroundColor="primary" onClick={updateColumnInfo}>Сохранить изменения</Button>
              <Button onClick={deleteColumn} style = {{color:"#f9a825"}} ><DeleteIcon /></Button>
          </div>

          <div style={{paddingLeft:"10px", paddingRight:"10px", paddingTop:"10px"}}>
            <Paper style = {{
              borderRadius: 3,
              backgroundColor: '#fafafa',
              paddingTop: "15px",
              paddingLeft:"10px",
              elevation: 12,
              boxShadow: "0px 0px 1px 1px grey"
            }}>
              <Typography style = {{paddingLeft: "5px", paddingRight: "10px"}} variant="h6">
                Добавить задачу
              </Typography>
              <div style={{paddingRight:"10px"}}>
                <TextField
                  name="name"
                  label="Изменить имя"
                  placeholder="Имя задачи"
                  onChange={taskChangeHandler}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <div style={{paddingRight:"10px"}}>
                <TextField
                  name="description"
                  label="Задать описание"
                  placeholder="Описание задачи"
                  onChange={taskChangeHandler}
                  fullWidth
                  multiline
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              {/*<div style={{paddingTop:"20px"}}>*/}

              {/*  <div style={{paddingRight: "10px", paddingTop: "15px", float:"left"}}>*/}
              {/*    <Chip onDelete={() => {}} />*/}
              {/*  </div>*/}

              {/*  <div style={{paddingRight: "10px",paddingBottom: "0px", float:"left"}}>*/}
              {/*    <TextField*/}
              {/*      placeholder="Фильтр"*/}
              {/*      inputProps={{ "aria-label": "naked" }}*/}
              {/*      variant="standard"*/}
              {/*      label="Добавить фильтр"*/}
              {/*      size="small"*/}
              {/*      width="30%"*/}
              {/*      />*/}
              {/*  </div>*/}

              {/*  <div style={{paddingRight: "10px", paddingTop: "15px",float:"left",}}>*/}
              {/*    <Button  size="small" color="primary">*/}
              {/*      Подтвердить*/}
              {/*    </Button>*/}
              {/*  </div>*/}

              {/*</div>*/}

              <div style = {{display: "block", paddingLeft:"5px", paddingRight: "10px", paddingBottom: "15px"}}>
                <FormControl style={{width:"100%"}}  >
                  <InputLabel >Ответственный</InputLabel>
                  <Select
                      name="OwnerSelect"
                      onChange={taskOwnerSelector}
                      input={<Input />}
                  >
                    { users.map(
                      (user) => <MenuItem value={user.id}> {user.name} </MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </Paper>
          </div>

          <div style = {{paddingTop: "5px",paddingLeft:"5px", elevation: 12, boxShadow: 0}}>
            <Button  onClick={addTask} color="primary">Добавить задачу</Button>
          </div>

          <div >
            <Typography style = {{paddingLeft: "20px",paddingTop: "10px"}} variant="h6" >Задачи:</Typography>
          </div>

          <div>
            {column.tasks.map(
              (task, index) =>
                <TaskField
                    task={task}
                    users={users}
                    deskId={props.deskId}
                    columnIndex={props.index}
                    index={index}
                    deleteHandler={deleteTask}/>
            )}
          </div>
        </Paper>
      </Grid>
    </div>
  )
}
 
export default ColumnComponent; 