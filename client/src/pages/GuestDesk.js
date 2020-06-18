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

export function GuestDesk(props) {
  
  const classes = { props };
  const sr = { paddingRight: 30, fontSize: 20, color: "white" };

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

  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
    

  return (
    <div>
      {/*хедер на замену*/}

      

      <div>
 
        <div className={classes.root1}   >
          <ExpansionPanel defaultExpanded className={classes.root1} style={{ borderRadius:"0px", boxShadow:"0px 0px 0px" }}>
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
                  defaultValue="Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,"
                  inputProps={{ "aria-label": "naked" }}
                />
                
              </div>
              <div className={clsx(classes.column, classes.helper)} >
                
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small">Изменить</Button>
              <Button size="small" color="primary">
                Сохранить
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>

        <div className={classes.root1} >
          <ExpansionPanel defaultExpanded className={classes.root1}  style={{ borderRadius:"0px", boxShadow:"0px 0px 0px 1px  rgba(122,122,122,0.5)"}}>
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
              <div className={classes.column}>
                {desk.users.map((user)=><Chip label={user.name} onDelete={() => {}} />)}
                <InputBase

                  style={{
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                  }}
                  // className={classes.margin}
                  defaultValue="Добавление участника"
                  inputProps={{ "aria-label": "naked" }}
                />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small">Изменить</Button>
              <Button size="small" color="primary">
                Применить
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>

        <div className={classes.root1}>
          <ExpansionPanel defaultExpanded className={classes.root1} style={{ borderTopLeftRadius:"0px", borderTopRightRadius:"0px", boxShadow:" 0px 0px 0px 1px  rgba(122,122,122,0.5)"}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>Фильтры</Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column} />
              <div className={classes.column}>
              {desk.filters.map((filter)=><Chip label={filter.name} onDelete={() => {}} />)}
                <InputBase

                  style={{
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                    
                  }}
                  // className={classes.margin}
                  defaultValue="Добавление фильтра"
                  inputProps={{ "aria-label": "naked" }}
                />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small">Изменить</Button>
              <Button size="small" color="primary">
                Применить
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>
      </div>

      {/*страшная конструкция*/}
      <Paper elevation="0">
        <Typography className="marg1">
          <Container maxWidth="xl">
            <Typography
              component="div"
              style={{ backgroundColor: "#ffffff", height: "100vh" }}
            >
              <div className={classes.root}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>


{/* Имя колонки и описание*/}

                  <TextField
                    id="name"
                    label="Задать имя колонки"
                    value={column.name}
                    onChange={columnChangeHandler}
                    placeholder="Имя колонки"
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
                  label="Задать описание колонки"
                  value={column.description}
                  onChange={columnChangeHandler}
                  placeholder="Описание колонки"
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
                  {/* <Grid item xs={3}>
                        <Paper className={classes.paper}>
                          <Typography><h3>Task Name</h3>
                            <button onClick={this.AddTask}>+Добавить задачу</button>
                            {[...Array(this.state.count)].map(() => <textarea />)}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper className={classes.paper}>
                          <Typography><h3>Task Name</h3>
                            <button >+Добавить задачу</button>
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper className={classes.paper}>
                          <Typography><h3>Task Name</h3>
                            <button >+Добавить задачу</button>
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper className={classes.paper}>
                          <Typography><h3>Task Name</h3>
                            <button >+Добавить задачу</button>
                          </Typography>
                        </Paper>
                      </Grid> */}
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

/*constructor(props){
    super(props);
    this.AddTask = this.AddTask.bind(this); 
    this.AddBtn = this.AddBtn.bind(this); 
}*/
/*AddTask(){
return (
  <textarea>
    
  </textarea>
)
}*/

//попытка сделать хедер без теней
/* function ElevationScroll(props) {
  return React.cloneElement({
    elevation: 0,
  });
} */
/* 
export default function DeskName(){
  const linksunderline = useStyles();
  const styles2 = useStyles2();
    const classes1 = useStyles3();
    return(
  <div>
{/*хедер на замену*/
/*        
        <AppBar position="static" className={linksunderline.appbarstyle}>
          <Toolbar className={linksunderline.appbarstyle}>   
    
            <Link href="/" className={linksunderline.linkstyle} >Главная</Link>
            <Link href="/guests" className={linksunderline.linkstyle} >Доска Задач</Link>
            <Link href="/guestD" className={linksunderline.linkstyle} >Доска</Link>
            
            <h4  className={linksunderline.linkstyle}  >DeskName</h4>
            <h3 className={linksunderline.linkstyle} >UserName</h3>
            <Link href="/" className={linksunderline.linkstyle} >Выход</Link>
          </Toolbar>
        </AppBar>
 




    <div>
     

      <div className={classes1.root}>
      <ExpansionPanel defaultExpanded className={classes1.root}>
        <ExpansionPanelSummary
       
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes1.column}>
            <Typography className={classes1.heading}>Описание доски</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes1.details}>
          <div className={classes1.column} />
          <div className={classes1.column}>
            <Typography>Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,</Typography>
            
          </div>
          <div className={clsx(classes1.column, classes1.helper)}>
            <Typography variant="caption">
              Здесь будет описание доски
              <br />
              {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                Learn more
              </a> */
/*  </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Отмена</Button>
          <Button size="small" color="primary">
            Сохранить
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>

 */
{
  /* <div className={classes1.root}>
      <ExpansionPanel defaultExpanded className={classes1.root}>
        <ExpansionPanelSummary
       
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes1.column}>
            <Typography className={classes1.heading}>Фильтры</Typography>
          </div> */
}
/*  </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes1.details}>
          <div className={classes1.column} />
            <div className={classes1.column}>
            <Chip label="Название задачи" onDelete={() => {}} />
            <Chip label="Участник: Петя" onDelete={() => {}} />
              
            </div>
          <div className={clsx(classes1.column, classes1.helper)}>
            <Typography variant="caption">
              Примененные фильтры
              {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                Learn more
              </a> */
/*  </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Отмена</Button>
          <Button size="small" color="primary">
            Применить
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>

    </div> */

{
  /*страшная конструкция*/
}
/*   <Paper elevation = "0">
      
      <Typography className="marg1">
        <Container maxWidth="xl"  >
          <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100vh' }}>
            <div className={styles2.root}>
            <Button className={styles2.paper}variant="outlined" color="primary">+Добавить колонку</Button>
              <Grid container spacing={0}>
                 <Grid item xs={12}>
                  <Button className={styles2.paper}variant="outlined" color="primary">+Добавить колонку</Button>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={styles2.paper}>
                    <Typography><h3>Task Name</h3>
                      <button >+Добавить задачу</button>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Typography>
        </Container>
          
      </Typography>
    </Paper>
   
/*    
  </div>
    );
  }
  
 */
