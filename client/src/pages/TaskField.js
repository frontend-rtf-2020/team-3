import React from "react";
import { Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import { useHttp } from "../hooks/http.hook";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {},
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function TaskField(props) {
  const { request } = useHttp();

  const [task, taskChange] = useState(props.task);
  const [users, setUsers] = useState(props.users);
  const [baseTaskName, setBaseTaskName] = useState(task.name);
  const [newColumn, setNewColumn] = useState(props.columnName);

  const changeHandler = (event) => {
    taskChange({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const selectChangeHandler = (event) => {
    taskChange({
      ...task,
      owner: event.target.value,
    });
  };

  const shiftChangeHandler = (event) => {
    setNewColumn(event.target.value);
  };

  const updateTask = () => {
    if (task.name !== "" && props.tasks.every((e) => e.name !== task.name)) {
      request("/api/table/updateTask", "POST", {
        tableId: props.deskId,
        column: props.columnName,
        task: baseTaskName,
        name: task.name,
        description: task.description,
        owner: task.owner,
      });
      props.changeTask(baseTaskName, task);
      setBaseTaskName(task.name);
    }
  };

  const deleteHandler = () => {
    props.deleteHandler(baseTaskName);
  };

  const shiftTask = (event) => {
    console.log(0, baseTaskName, props.columnName, newColumn);
    props.shiftTask(baseTaskName, props.columnName, newColumn);
  };

  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          paddingTop: "15px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "10px",
        }}
      >
        <Paper
          style={{
            borderRadius: 3,
            backgroundColor: "#fafafa",
            paddingTop: "2px",
            paddingLeft: "10px",
            elevation: 12,
            boxShadow: "0px 0px 1px 1px grey",
          }}
        >
          <div style={{ paddingRight: "10px" }}>
            <TextField
              name="name"
              label="Изменить имя"
              fullWidth
              placeholder="Имя задачи"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={task.name}
              variant="outlined"
              onChange={changeHandler}
            />
          </div>
          <div style={{ paddingRight: "10px" }}>
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
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <div style={{ width: "100%", paddingTop: "0px" }}>
            <FormControl
              className={classes.formControl}
              style={{ width: "80%" }}
            >
              <InputLabel>Ответственный</InputLabel>
              <Select
                value={task.owner}
                onChange={selectChangeHandler}
                input={<Input />}
              >
                {users.map((user) => (
                  <MenuItem value={user.id}>{user.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={updateTask}
              style={{ marginTop: "20px" }}
              color="primary"
            >
              Сохранить изменения
            </Button>
            <Button
              onClick={deleteHandler}
              style={{ marginTop: "20px" }}
              color="primary"
            >
              <DeleteIcon />
            </Button>
          </div>
          <div
            style={{
              paddingTop: "10px",
              paddingRight: "10px",
              color: "#fafafa",
              paddingBottom: "10px",
            }}
          >
            <ExpansionPanel
              className={classes.root1}
              style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                boxShadow: " 0px 0px 0px 1px  rgba(122,122,122,0.5)",
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                style={{ backgroundColor: "rgba(0, 0, 0, .02)" }}
              >
                <div className={classes.column}>
                  <Typography className={classes.heading}>
                    Перемещение
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                className={classes.details}
                style={{ width: "100%%" }}
              >
                <div className={classes.column} />
                <div className={classes.column}>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "80%" }}
                  >
                    <InputLabel>Выбрать колонку</InputLabel>
                    <Select
                      defaultValue={newColumn}
                      onChange={shiftChangeHandler}
                      input={<Input />}
                    >
                      {props.columns.map((column) => (
                        <MenuItem value={column.name}>{column.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button
                    onClick={shiftTask}
                    style={{ marginTop: "20px" }}
                    color="primary"
                  >
                    Переместить
                  </Button>
                </div>
                <div className={clsx(classes.column, classes.helper)}></div>
              </ExpansionPanelDetails>
              <Divider />
            </ExpansionPanel>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default TaskField;
