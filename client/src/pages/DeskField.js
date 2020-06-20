import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import GuestDesk from "./GuestDesk";
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import { useDesk } from "../hooks/desk.hook";

function DeskField(props) {
  const [desk, setDesk] = useState(props.desk);
  const { dropDesk, upDesk, deskId } = useDesk();
  const onDeskChange = (event) => {
    setDesk({
      ...desk,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div style={{}}>
      <Grid
        style={{ paddingTop: "20px", paddingRight: "20px" }}
      >
        <Paper
          style={{
            borderRadius: 15,
            backgroundColor: "#eeeeee",
            paddingRight: "0px",
          }}
        >
          <InputBase
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              color: "black",
              fontSize: "25px",
            }}
            id="name"
            onChange={onDeskChange}
            value={desk.name}
            fullWidth
            disabled
            multiline
            inputProps={{ "aria-label": "naked" }}
          />

          <Typography
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
            variant="h6"
          >
            Описание:
          </Typography>

          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingRight: "20px",

              color: "black",
            }}
          >
            <Paper
              style={{
                color: "#eeeeee",
                backgroundColor: "#eeeeee",
                paddingLeft: "10px",
                paddingTop: "10px",
                paddingRight: "40px",
                paddingBottom: "10px",
                boxShadow: "0px 0px 1px 1px grey",
              }}
            >
              <InputBase
                style={{
                  paddingLeft: "10px",
                  paddingTop: "10px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                  color: "black",
                }}
                id="name"
                onChange={onDeskChange}
                value={desk.description}
                fullWidth
                disabled
                multiline
                inputProps={{ "aria-label": "naked" }}
              />
            </Paper>
          </div>

          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingRight: "30px",
              float: "left",
            }}
          >
            <Button
              onClick={() => {
                console.log("DeskField.js", desk.id, desk.name);
                dropDesk(desk.id, desk.name);
              }}
            >
              <Router>
                <Link href="/guestD" style={{ textDecoration: "none" }}>
                  Редактировать доску
                </Link>
                <Switch>
                  <Route
                    path="/guestD"
                    component={(id) => <GuestDesk id={id} />}
                  />
                </Switch>
              </Router>
            </Button>
          </div>
          <div
            style={{
              paddingLeft: "0px",
              paddingTop: "20px",
              paddingRight: "30px",
              flex: "left",
            }}
          >
            <Button style={{ color: "orange" }}>
              Прекратить использовать доску
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}
export default DeskField;
