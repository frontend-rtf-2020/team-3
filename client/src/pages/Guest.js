import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "../App.css";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import DeskField from "./DeskField";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useAuth } from "../hooks/auth.hook";

export function GuestDesk(props) {
  const { request } = useHttp();
  const { userId, getUserId } = useAuth();

  const [currentDesk, setCurrentDesk] = useState({
    name: "",
    description: "",
    id: "",
  });
  const [desks, setDesks] = useState([]);

  const loadDesks = async () => {
    setDesks([]);
    try {
      const tables = await request("/api/tables", "POST", { id: getUserId() });
      setDesks(tables);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    loadDesks();
  }, []);
  const addDeskDB = async (name, description) => {
    const id = await request("/api/tables/add", "POST", {
      owner: getUserId(),
      name: name,
      description: description,
    });
    return id;
  };

  const addDesk = async (event) => {
    if (currentDesk.name === "") {
    } else {
      currentDesk.id = await addDeskDB(
        currentDesk.name,
        currentDesk.description
      );
      desks.push(currentDesk);
      setCurrentDesk({
        name: "",
        description: "",
        id: "",
      });
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
        }}
      >
        <TextField
          id="name"
          label="Задать имя доски"
          defaultValue={currentDesk.name}
          onChange={(event) => {
            currentDesk.name = event.target.value;
          }}
          placeholder="Имя доски"
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
          label="Задать описание"
          defaultValue={currentDesk.description}
          onChange={(event) => {
            currentDesk.description = event.target.value;
          }}
          placeholder="Описание доски"
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div style={{ paddingLeft: "20px", paddingTop: "10px" }}>
        <Button variant="outlined" color="primary" onClick={addDesk}>
          + Добавить доску
        </Button>

        {desks.map((desk) => (
          <DeskField desk={desk} />
        ))}
      </div>

      <CssBaseline />

      <Container maxWidth="100%">
        <Grid container spacing={0}>
          <Grid item xs={12} style={{}}>
            <div
              style={{
                paddingLeft: "10px",
                paddingTop: "20px",
                paddingRight: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
export default GuestDesk;
