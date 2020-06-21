import React, { useContext, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { Switch, NavLink, useHistory, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./useStyles";
import ColumnComponent from "./ColumnComponent";
import InputBase from "@material-ui/core/InputBase";
import { useState } from "react";
import { useAuth } from "../hooks/auth.hook";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useHttp } from "../hooks/http.hook";
import { useDesk } from "../hooks/desk.hook";
import { DeskContext } from "../context/DeskContext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

export function GuestDesk(props) {
  const classes = { props };
  const { request } = useHttp();
  const { userId } = useAuth();
  const Desk = useContext(DeskContext);

  const baseDesk = {
    _id: "",
    name: "",
    description: "",
    users: [],
    columns: [],
    tags: [],
  };

  const [column, setColumn] = useState({
    name: "",
    description: "",
    tasks: [],
  });

  const [deskId, setId] = useState(Desk.upDesk().deskId);
  const [desk, setDesk] = useState(baseDesk);
  const [expanded, setExpanded] = useState(false);
  const [some, setSome] = useState(false);
  const [columns, setColumns] = useState([]);

  let newUser = "";

  const update = () => {
    setSome(!some);
  };

  const loadDesk = async () => {
    if (!deskId) return;
    try {
      const table = await request("/api/table", "POST", { tableId: deskId });
      setDesk(table);
      setColumns(table.columns);
    } catch (error) {}
  };

  useEffect(() => {
    loadDesk();
  }, []);

  const addColumnDb = (name, description) => {
    request("/api/table/addColumn", "POST", {
      tableId: deskId,
      name: name,
      description: description,
    });
  };

  const addColumn = (event) => {
    if (column.name !== "" && columns.every(e => e.Name !== column.name))
    {
      addColumnDb(column.name, column.description);
      columns.push(column);
      setColumn({ name: "", description: "", tasks: [] });
    }
  };

  const addUser = async (event) => {
    if (newUser !== "") {
      for (let i = 0; i < desk.users.length; i++) {
        if (desk.users[i].email === newUser) {
          return;
        }
      }
      try {
        const user = await request("/api/table/addUser", "post", {
          tableId: deskId,
          email: newUser,
        });
        if (user) {
          desk.users.push(user);
          update();
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const removeUserDb = (id) => {
    request("/api/table/removeUser", "post", { tableId: deskId, userId: id });
  };

  const removeUser = (id) => {
    if (id != userId) {
      setDesk({
        ...desk,
        users: desk.users.filter((user) => user.id != id),
      });
      removeUserDb(id);
    }
  };

  const changeDeskInfo = () => {
    changeDeskInfoDb(desk.name, desk.description);
    setDesk(desk);
  };

  const changeDeskInfoDb = (name, description) => {
    request("/api/table/updateTable", "POST", {
      tableId: deskId,
      name: name,
      description: description,
    });
  };

  const deleteColumnDb = (name) => {
    request("/api/table/deleteColumn", "POST", {
      tableId: deskId,
      column: name,
    });
  };

  const deleteColumn = (columnToRemove) => {
    setColumns(columns.filter((column) => column.name != columnToRemove.name));
    deleteColumnDb(columnToRemove.name);
  };

  const shiftTask = (task, newColumnName) =>
  {
    console.log(2, task, newColumnName);

    const name = newColumnName;

    const a = columns.find(column => column.name === newColumnName);
    a.tasks.push(task);

    setColumns(columns.map(column => {
      if(column.name === name)
        return {...a};
      return column;
    }))


    request("/api/table/addTask", "POST",
        { tableId: deskId, column: newColumnName, name: task.name, description: task.description, owner: task.owner});
  }

  const generateColumns = () => {
    return columns.map((column) => (
      <ColumnComponent
        deskId={deskId}
        column={column}
        columns={columns}
        users={desk.users}
        key={column.name}
        shiftTask={shiftTask}
        delete={(id) => deleteColumn(id)}
      />
    ));
  };

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const generate = (element) => {
    return desk.users.map((value) =>
      React.cloneElement(element, {
        key: value.name,
      })
    );
  };

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <div>
        <div className={classes.root1}>
          <ExpansionPanel
            defaultExpanded
            onChange={handleExpand("panel1")}
            className={classes.root1}
            style={{ borderRadius: "0px", boxShadow: "0px 0px 0px" }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  Информация о доске
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column} />
              <div
                style={{
                  width: "50%",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
              >
                <TextField
                  name="name"
                  label="Имя доски"
                  defaultValue={desk.name}
                  onChange={(event) => {
                    desk.name = event.target.value;
                  }}
                  fullWidth
                  multiline
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <div
                style={{
                  width: "50%",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
              >
                <TextField
                  name="description"
                  label="Описание"
                  defaultValue={desk.description}
                  onChange={(event) => {
                    desk.description = event.target.value;
                  }}
                  fullWidth
                  multiline
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <div className={clsx(classes.column, classes.helper)}></div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button size="small" color="primary" onClick={changeDeskInfo}>
                Сохранить
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>

        <div className={classes.root1}>
          <ExpansionPanel
            className={classes.root1}
            style={{
              borderRadius: "0px",
              boxShadow: "0px 0px 0px 1px  rgba(122,122,122,0.5)",
            }}
          >
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
                <div
                  className={classes.demo}
                  style={{ float: "left", paddingRight: "5px" }}
                >
                  <List dense={dense}>
                    {desk.users.map((user) => (
                      <ListItem>
                        <ListItemText primary={user.name} />
                        <ListItemSecondaryAction
                          onClick={() => {
                            removeUser(user.id);
                          }}
                        >
                          <IconButton
                            edge="center"
                            aria-label="delete"
                            style={{ padding: "5px" }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </div>
                <div
                  style={{
                    paddingRight: "10px",
                    paddingBottom: "0px",
                    float: "left",
                  }}
                >
                  <TextField
                    placeholder="Email"
                    inputProps={{ "aria-label": "naked" }}
                    defaultValue=""
                    variant="standard"
                    label="Добавить участника"
                    onChange={(event) => {
                      newUser = event.target.value;
                    }}
                    size="small"
                    width="30%"
                  />
                </div>
                <div
                  style={{
                    paddingRight: "10px",
                    paddingTop: "15px",
                    float: "right",
                  }}
                >
                  <Button size="small" color="primary" onClick={addUser}>
                    Подтвердить
                  </Button>
                </div>
              </div>
              <div className={clsx(classes.column, classes.helper)}></div>
            </ExpansionPanelDetails>
            <Divider />
          </ExpansionPanel>
        </div>
      </div>

      {/*страшная конструкция*/}
      <Paper elevation="0" style={{ backgroundColor: "#fafafa" }}>
        <Typography className="marg1" style={{ backgroundColor: "#fafafa" }}>
          <Container maxWidth="xl">
            <Typography
              component="div"
              style={{ backgroundColor: "#fafafa", height: "100vh" }}
            >
              <div
                className={classes.root}
                style={{ backgroundColor: "#fafafa" }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    {/* Имя колонки и описание*/}
                    <div>
                      <Typography
                        style={{ paddingLeft: "10px", paddingTop: "10px" }}
                        variant="h6"
                      >
                        Добавление колонки
                      </Typography>
                    </div>
                    <TextField
                      id="name"
                      label="Имя колонки"
                      defaultValue={column.name}
                      onChange={(event) => {
                        column.name = event.target.value;
                      }}
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
                      defaultValue={column.description}
                      onChange={(event) => {
                        column.description = event.target.value;
                      }}
                      placeholder="(не должно быть пустым)"
                      fullWidth
                      multiline
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                    <div style={{paddingTop:"10px", paddingBottom:"15px"}}>
                      <Button
                        className={classes.paper}
                        variant="outlined"
                        color="primary"
                        onClick={addColumn}
                      >
                        + Добавить колонку
                      </Button>
                    </div>
                    
                    <div className="card">
                      {generateColumns()}
                    </div>
                    
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
