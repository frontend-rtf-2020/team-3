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

  dropDesk(desk.id);
  const onDeskChange = (event) => {
    setDesk({
      ...desk,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Grid /* item xs={3} */ style={{ paddingTop: "10px" }}>
        <Paper
          style={{ borderRadius: 5, backgroundColor: "#eeeeee", paddingTop: 0 }}
        >
          <InputBase
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingRight: "10px",
              paddingBottom: "10px",
            }}
            // className={classes.margin}
            id="name"
            onChange={onDeskChange}
            value={desk.name}
            fullWidth
            multiline
            inputProps={{ "aria-label": "naked" }}
          />

          <Typography
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
            variant="h6" /* className={regstyles.typostyle} */
          >
            Описание:
          </Typography>

          <TextField
            fullWidth
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
            id="description"
            onChange={onDeskChange}
            label=""
            variant="outlined"
            value={desk.description}
            multiline
            type="text"
          />

          {/* <Button style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}} onClick={this.MoveTo()} color="primary" >Открыть доску</Button> */}
          <Button
            style={{
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingRight: "10px",
            }}
          >
            <Router>
              <Link
                href="/guestD"
                style={{ textDecoration: "none", paddingLeft: "10px" }}
              >
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
          <Button
            style={{
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingRight: "10px",
            }}
            disabled
            color="primary"
          >
            Сохранить изменения
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
export default DeskField;
