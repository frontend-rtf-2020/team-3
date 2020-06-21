import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import "../App.css";
import { TextField, Paper, Typography } from "@material-ui/core";
import surf from "../assets/3d2.gif";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
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

export const Regpage = () => {
  const auth = useContext(AuthContext);
  const { getHash, getCheck } = useAuth();
  const message = useMessage();
  const { request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });
  const [open, setOpen] = useState(false);
  const [help, setHelp] = useState(
    "Зарегистрируйся или повторно введи свои данные!"
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    clearError();
  };

  useEffect(() => {
    setOpen(getCheck());
    message(error);
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      hash: getHash(),
    });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      setHelp(data.message);
      setOpen(true);
      message(data.message);
    } catch (error) {
      setOpen(true);
    }
  };

  return (
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
                    <Typography variant="h6">Регистрация</Typography>
                    <p style={{ paddingBottom: "1%", paddingTop: "10px" }}>
                      {" "}
                      <TextField
                        placeholder="Введите email"
                        id="email"
                        type="text"
                        name="email"
                        className="yellow-input"
                        onChange={changeHandler}
                      />
                    </p>
                    <p style={{ paddingBottom: "1%", paddingTop: "10px" }}>
                      {" "}
                      <TextField
                        placeholder="Введите Имя"
                        id="name"
                        type="text"
                        name="myName"
                        className="yellow-input"
                        onChange={changeHandler}
                      />
                    </p>
                    <p style={{ paddingBottom: "1%", paddingTop: "10px" }}>
                      <TextField
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
                        onClick={registerHandler}
                        style={{ marginRight: "3%" }}
                        variant="outlined"
                        color="primary"
                      >
                        Регистрация
                      </Button>

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
  );
};
