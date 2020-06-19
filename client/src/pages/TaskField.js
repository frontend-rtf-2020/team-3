import React, {Component} from 'react';
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
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";

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
    
/* 
const [name, setName] = useState("");

const [description, setDescription] = useState(""); */

const [task, taskChange] = useState(props.task);

const deleteHandler = props.deleteHandler;

const changeHandler = (event) => {
  taskChange({
    ...task, [event.target.id]:event.target.value
  });
}

const addHandler = async () =>{
  console.log(task);
}

const dragStart = e => {
  const target = e.target;

  e.dataTransfer.setData('task_id', target.id);

  setTimeout(()=>{
    target.style.display = 'none';
  }, 0)
}


const names = [

];

const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const onchange = event =>{
  props.onChange(event.target.value)
  }
  return(

  <div
  id = {props.id}
  draggable={props.draggable}
  onDragStart={dragStart}
  //onDragOver={dragOver}
  >
   
  <div  style = {{paddingTop: "15px",paddingLeft:"10px",paddingRight:"10px"}}>
 
    <Paper style = {{borderRadius: 3, backgroundColor: '#fafafa', paddingTop: "15px",paddingLeft:"10px", elevation: 12, boxShadow: "0px 0px 1px 1px grey"}}>
      <div style={{paddingRight:"10px"}}>
        <TextField
          id="name"
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
          id="description"
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
                    <Divider />
                  </ExpansionPanel>
                </div>      






        <div style = {{width:"100%", paddingTop:"0px"}} >
          <FormControl className={classes.formControl}  style = {{width:"80%"}}>
            <InputLabel id="demo-mutiple-chip-label">Ответственный</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                outlined
                value={task.owner}
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>)}
                  MenuProps={MenuProps}
                >
                {names.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                {name}
                </MenuItem>))}
              </Select>
          </FormControl>
        <Button onClick={addHandler} style={{marginTop:"20px"}} color="primary">Сохранить изменения</Button>
        <Button onClick={()=>{}} style={{marginTop:"20px"}} color="primary"><DeleteIcon /></Button>
        </div>
    </Paper>
    
  </div>

</div>

)
}

export default TaskField;

