import React, { useContext } from "react";
import { Paper, Typography } from "@material-ui/core";
import {Switch, NavLink, useHistory, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//import "../../App.css";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./useStyles";
import ColumnComponent from "./ColumnComponent";
import InputBase from "@material-ui/core/InputBase";
//import makeStyles from '@material-ui/styles';
import { useState } from "react";

import { useAuth } from "../hooks/auth.hook";
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export function GuestDesk(props) {
  
  const classes = { props };
  const sr = {  fontSize: 20, color: "white" };

  /* const { token, login, logout, userId } = useAuth(); */
  const [column, setColumn] = useState({name:"",description:"",tasks:[]});
  const [desk, setDesk] = useState({name:"name",description:"description",users:[{name:"vasia",id:""},
  {name:"kolya",id:""}],
  columns:[],
  filters:[{name:"vasia"},{name:"kolya"}]});

  const changeHandler = (event) => {
    setDesk({
      ...desk, [event.target.id]:event.target.value
    })
  }

  const columnChangeHandler = (event) => {
    setColumn({
      ...column, [event.target.id]:event.target.value
    })
  }

  const addColumn = (event) => {
    if(column.name === ""){
      
    }
    else{
      desk.columns.push(column)
      setColumn({name:"",description:"",tasks:[]})
    }
    

  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
    

  return (
    <div >
      <div>
        <div className={classes.root1}   >
          <ExpansionPanel defaultExpanded onChange={handleExpand('panel1')}  className={classes.root1} style={{ borderRadius:"0px", boxShadow:"0px 0px 0px" }}>
            <ExpansionPanelSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}> 
                <Typography className={classes.heading}>
                  Описание доски
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column} />
              <div style={{width:"100%"}} >
                <InputBase 
                  fullWidth
                  multiline
                  style={{
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                    
                  }}
                  // className={classes.margin}
                  defaultValue="Cras mattis"
                  inputProps={{ "aria-label": "naked" }}
                />
                
              </div>
              <div className={clsx(classes.column, classes.helper)} >
                
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small" color="primary">
                Сохранить
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>

        <div className={classes.root1} >
          <ExpansionPanel  className={classes.root1}  style={{ borderRadius:"0px", boxShadow:"0px 0px 0px 1px  rgba(122,122,122,0.5)"}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>Участники</Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column} />
                <div className={classes.column} >
                  <div fullWidth style={{float:"right"}}>
                    {desk.users.map((user)=>
                      <div style={{paddingRight: "10px", paddingTop: "15px", float:"left"}}>
                        <Chip label={user.name}  onDelete={() => {}} />
                      </div>)}
                      <div style={{paddingRight: "10px",paddingBottom: "0px", float:"left"}}>
                        <TextField 
                          placeholder="Email"
                          inputProps={{ "aria-label": "naked" }}
                          variant="standard"
                          label="Добавить участника"
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

        <div className={classes.root1}>
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
                      {desk.filters.map((filter)=>
                      <div style={{paddingRight: "10px", paddingTop: "15px", float:"left"}}>
                        <Chip label={filter.name} onDelete={() => {}} />
                      </div>)}
                      <div style={{paddingRight: "10px",paddingBottom: "20px",paddingBottom: "0px", float:"left"}}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">Фильтр</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            style={{paddingRight: "80px"}}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
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
      </div>

      {/*страшная конструкция*/}
      <Paper elevation="0" style={{backgroundColor:"#fafafa"}}>
        <Typography className="marg1" style={{backgroundColor:"#fafafa"}}>
          <Container maxWidth="xl">
            <Typography
              component="div"
              style={{ backgroundColor: "#ffffff", height: "100vh" }}
            >
              <div className={classes.root} style={{backgroundColor:"#fafafa"}}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>


{/* Имя колонки и описание*/}
            <div >
              <Typography style = {{paddingLeft: "10px",paddingTop: "10px"}} variant="h6"  >Добавление колонки</Typography>
            </div>
                  <TextField
                    id="name"
                    label="Имя колонки"
                    value={column.name}
                    onChange={columnChangeHandler}
                    placeholder="(не должно быть пустым)"
                    fullWidth
                    multiline
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                <TextField
                  id="description"
                  label="Описание колонки"
                  value={column.description}
                  onChange={columnChangeHandler}
                  placeholder="(не должно быть пустым)"
                  fullWidth
                  multiline
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                    <Button
                      className={classes.paper}
                      variant="outlined"
                      color="primary"
                      onClick={addColumn}
                    >
                      + Добавить колонку
                    </Button>

                    {desk.columns.map((column) => (
                      <ColumnComponent column = {column} />
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Typography>
          </Container>
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(useStyles)(GuestDesk);
