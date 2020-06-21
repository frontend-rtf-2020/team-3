import React from 'react';
import { Button,Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import {useHttp} from "../hooks/http.hook";

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

function TaskField(props) {

  const { request } = useHttp();

  const [task, taskChange] = useState(props.task);
  const [users, setUsers] = useState(props.users)

  const changeHandler = (event) => {
    taskChange({
      ...task, [event.target.name]:event.target.value
    });
  }

  const selectChangeHandler = (event) => {
    taskChange({
      ...task, owner:event.target.value
    });
  }

  const updateTask = () =>{
    request("/api/table/updateTask", "POST",
        { tableId: props.deskId,
          column: props.columnIndex,
          task: props.index,
          name: task.name,
          description: task.description,
          owner: task.owner
        });
  }

  const classes = useStyles();

  return(
    <div>
      <div style = {{paddingTop: "15px",paddingLeft:"10px",paddingRight:"10px", paddingBottom: "10px"}}>
        <Paper style = {{borderRadius: 3, backgroundColor: '#fafafa', paddingTop: "2px",
          paddingLeft:"10px", elevation: 12, boxShadow: "0px 0px 1px 1px grey"}}>
          <div style={{paddingRight:"10px"}}>
            <TextField
              name="name"
              label="Изменить имя"
              fullWidth
              placeholder="Имя задачи"
              margin="normal"
              InputLabelProps={{
                shrink: true,}}
              value={task.name}
              variant="outlined"
              onChange={changeHandler}
            />
          </div>
          <div style={{paddingRight:"10px"}}>
            <TextField
              name="description"
              label="Задать описание"
              onChange={changeHandler}
              placeholder="Описание задачи"
              fullWidth
              multiline
              value={task.description}
              margin="normal"
              InputLabelProps={{
              shrink: true,}}
              variant="outlined"
            />
          </div>

          <div className={classes.root1} style={{paddingRight:"10px",paddingBottom:"10px",paddingTop:"10px",color:"#fafafa"}}>
            <ExpansionPanel className={classes.root1} style={{ borderTopLeftRadius:"0px", borderTopRightRadius:"0px", boxShadow:" 0px 0px 0px 1px  rgba(122,122,122,0.5)"}}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography className={classes.heading}>Фильтры</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details} style={{width:"100%%"}} >
                <div className={classes.column} />
                  <div className={classes.column} >
                    <div fullWidth style={{float:"right"}}>
                      {/* {desk.filters.map((filter)=> */}
                      <div style={{paddingRight: "10px", paddingTop: "15px", float:"left"}}>
                        <Chip /* label={filter.name} */ onDelete={() => {}} />
                      </div>
                      <div style={{paddingRight: "10px",paddingBottom: "0px", float:"left"}}>
                        <TextField
                          placeholder="Участник"
                          inputProps={{ "aria-label": "naked" }}
                          variant="standard"
                          label="Добавить фильтр"
                          size="small"
                          width="30%"
                          />
                      </div>
                      <div style={{paddingRight: "10px", paddingTop: "15px",float:"right",}}>
                        <Button  size="small" color="primary">
                          Подтвердить
                        </Button>
                      </div>
                    </div>
                  </div>
                <div className={clsx(classes.column, classes.helper)}></div>
              </ExpansionPanelDetails>
              <Divider/>
            </ExpansionPanel>
          </div>
          <div style = {{width:"100%", paddingTop:"0px"}} >
            <FormControl className={classes.formControl}  style = {{width:"80%"}}>
              <InputLabel >Ответственный</InputLabel>
                <Select
                  value={task.owner}
                  onChange={selectChangeHandler}
                  input={<Input/>}
                  >
                  {users.map( user => (
                    <MenuItem value={user.id}>
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>
            <Button onClick={updateTask} style={{marginTop:"20px"}} color="primary">Сохранить изменения</Button>
            <Button onClick={()=>{}} style={{marginTop:"20px"}} color="primary"><DeleteIcon /></Button>
          </div>
        </Paper>
      </div>
    </div>
)
}

export default TaskField;

