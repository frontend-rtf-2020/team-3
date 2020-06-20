import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import "../App.css";
import { TextField, Paper, Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import surf from "../assets/3d2.gif";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { VKRegistration } from "./VKauth";
import VK, { Auth } from "react-vk";
import { regpage } from "./regpage.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [help, setHelp] = useState("");
  const {
    login,
    logout,
    getName,
    setName,
    setHash,
    getHash,
    token,
    userId,
  } = useAuth();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    clearError();
  };

  const vkAuth = async (user) => {
    try {
      setHash(user.hash);
      console.log(user);
      const data = await request("/api/auth/vklogin", "POST", { ...user });
      if (data.isExist) {
        setName(data.name);
        auth.login(data.token, data.userId);
        console.log(user.hash);
      } else {
        console.log("зарегайся");
      }
    } catch {
      setOpen(true);
    }
  };

  useEffect(() => {
    message(error);
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      console.log("AuthPage.js", data.name);
      setName(data.name);
      auth.login(data.token, data.userId);
    } catch (error) {
      setOpen(true);
    }
  };

  return (
    <div>
      <div className="row">
        <Typography
          component="div"
          style={{ backgroundColor: "#fafafa", height: "100vh" }}
        >
          <div>
            <div className="flx2">
              <Paper
                elevation={3}
                style={{
                  borderRadius: 25,
                  backgroundColor: "#f4ff81",
                  borderBottom: "40px",
                }}
                variant="elevation"
              >
                <div className="flx4" style={{ display: "flex" }}>
                  <div>
                    <form style={{ padding: "40px" }} className="flx3">
                      
                      <Typography
                        variant="h6"
                      >
                        Авторизация
                      </Typography>
                      <p style={{ paddingBottom: "1%" }}>
                        {" "}
                        <input
                          placeholder="Введите email"
                          id="email"
                          type="text"
                          name="email"
                          className="yellow-input"
                          onChange={changeHandler}
                        />
                      </p>
                      <p style={{ paddingBottom: "1%" }}>
                        <input
                          placeholder="Введите пароль"
                          id="password"
                          type="password"
                          name="password"
                          className="yellow-input"
                          onChange={changeHandler}
                        />
                      </p>
                      <div style={{ paddingTop: "10%" }}>
                        <Button
                          onClick={loginHandler}
                          style={{ marginRight: "3%" }}
                          variant="outlined"
                          color="primary"
                        >
                          Вход
                        </Button>

                        <VK apiId={7515170}>
                          <Auth
                            options={{
                              onAuth: (user) => {
                                vkAuth(user);
                              },
                            }}
                          />
                        </VK>

                        <Snackbar
                          open={open}
                          autoHideDuration={6000}
                          onClose={handleClose}
                        >
                          <Alert onClose={handleClose} severity="success">
                            {error || help}
                          </Alert>
                        </Snackbar>
                      </div>
                    </form>
                  </div>
                  <div style={{ display: "block", margin: "auto" }}>
                    <form
                      style={{
                        display: "block",
                        margin: "auto",
                        paddingRight: "30px",
                      }}
                    >
                      <Paper
                        className="flx3"
                        style={{
                          height: "240px",
                          borderRadius: "100px",
                          display: "block",
                          margin: "auto",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        <img
                          src={surf}
                          alt="dance"
                          style={{
                            height: "220px",
                            paddingTop: "10px",
                            borderRadius: "90px",
                            borderTopLeftRadius: "95px",
                            borderTopRightRadius: "95px",
                          }}
                        />
                      </Paper>
                    </form>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </Typography>
      </div>
      <div></div>
    </div>
  );
};
