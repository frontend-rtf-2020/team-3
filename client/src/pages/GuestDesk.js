import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "../../App.css";
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
import { Paper, Typography } from "@material-ui/core";
const User = require("../../../models/User");
import { useAuth } from "../hooks/auth.hook";
function LogIns(props) {
  // constructor(props) {
  //   super(props);
  //   //this.AddTask = this.AddTask.bind(this);
  //   this.state = {
  //     name:'',
  //     tags:'',
  //     count: 0,
  //     description: '',
  //     owner:''
  //   }
  // }

  // AddTask = () => {
  //   this.setState(({ count }) => ({
  //     count: count + 1,
  //   }));
  // }

  const [count, setCount] = useState(0);
  const [id, setId] = useState(1);

  const classes = { props };
  const sr = { paddingRight: 30, fontSize: 20, color: "white" };

  return (
    <div>
      {/*хедер на замену*/}

      <AppBar position="static" className={classes.appbarstyle}>
        <Toolbar className={classes.appbarstyle}>
          <Link href="/" className={props.classes.linkstyle} style={sr}>
            Главнаяdsadsadsa
          </Link>

          <Link
            href="/guests"
            className={classes.useStyles}
            style={{ paddingRight: 30, fontSize: 20, color: "white" }}
          >
            Доска Задач
          </Link>
          <Link
            href="/guestD"
            className={classes.linkstyle}
            style={{ paddingRight: 30, fontSize: 20, color: "white" }}
          >
            Доска
          </Link>

          <h4
            className={classes.linkstyle}
            style={{ paddingRight: 30, fontSize: 20, color: "white" }}
          >
            DeskName
          </h4>
          <h3
            className={classes.linkstyle}
            style={{ paddingRight: 30, fontSize: 20, color: "white" }}
          >
            dsadsad
          </h3>
          <Link
            href="/"
            className={classes.linkstyle}
            style={{ paddingRight: 30, fontSize: 20, color: "white" }}
          >
            Выход
          </Link>
        </Toolbar>
      </AppBar>

      <div>
        {/*стыбженный код c раскрывающимся описанием */}
        <div className={classes.root1}>
          <ExpansionPanel defaultExpanded className={classes.root1}>
            <ExpansionPanelSummary
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
              <div>
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
                <Typography>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.`,
                </Typography>
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Здесь будет описание доски
                  <br />
                  {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                      Learn more
                    </a> */}
                </Typography>
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

        <div className={classes.root1}>
          <ExpansionPanel defaultExpanded className={classes.root1}>
            <ExpansionPanelSummary
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
                <Chip label="Участник 1" onDelete={() => {}} />
                <Chip label="Участник 2" onDelete={() => {}} />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Примененные фильтры
                  {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                      Learn more
                    </a> */}
                </Typography>
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

        <div className={classes.root1}>
          <ExpansionPanel defaultExpanded className={classes.root1}>
            <ExpansionPanelSummary
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
                <Chip label="Название задачи" onDelete={() => {}} />
                <Chip label="Участник: Петя" onDelete={() => {}} />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Примененные фильтры
                  {/* <a href="#secondary-heading-and-columns" className={classes1.link}>
                      Learn more
                    </a> */}
                </Typography>
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
                    <Button
                      className={classes.paper}
                      variant="outlined"
                      color="primary"
                      onClick={() => setCount(count + 1)}
                    >
                      + Добавить колонку
                    </Button>

                    {[...Array(count)].map(() => (
                      <ColumnComponent id="1" />
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

export default withStyles(useStyles)(LogIns);

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
