import React, {Component} from 'react';
import { Button } from '@material-ui/core';
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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

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
const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  return(

  <div
  id = {props.id}
  draggable={props.draggable}
  onDragStart={dragStart}
  //onDragOver={dragOver}
  >
   
  <div  style = {{paddingTop: "5px",paddingLeft:"10px",paddingRight:"10px"}}>
    <Paper style = {{borderRadius: 3, backgroundColor: '#fafafa', paddingTop: "5px",paddingLeft:"10px", elevation: 12, boxShadow: "0px 0px "}}>
                  <div style={{width:"100%", display:"inline"}}>
                  <TextField
                    id="outlined-full-width"
                    label="Изменить имя"
                    style = {{width:"96%"}}
                    placeholder="Имя задачи"
                    
                    multiline
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  
                  <Button onClick={() => setCount(count + 1)} style={{marginTop:"20px"}} color="primary"><DeleteIcon /></Button>
                  
                  
                  </div>

                  <div style={{paddingRight:"20px"}}>
                  <TextField
                    id="outlined-full-width"
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
            
                   
                  <div style = {{width:"100%", paddingTop:"0px"}} >
                  
                            <FormControl className={classes.formControl}  style = {{width:"80%"}}>
                  <InputLabel id="demo-mutiple-chip-label">Ответственный</InputLabel>
                  <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    outlined
                    value={personName}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                      <div className={classes.chips}>
                        {selected.map(value => (
                          <Chip key={value} label={value} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map(name => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                
                  </div>
      {/* <label>Название задачи</label> 
      <input></input>
      <label>Описание</label><input></input>
      <label>Ответственный</label> <input></input> */}
      
    </Paper>
    
  </div>

</div>

          )
      

}

export default TaskField;

