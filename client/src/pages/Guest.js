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
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useAuth } from "../hooks/auth.hook";

export function GuestDesk(props) {
  const useStyles = makeStyles({
    linkstyle: {
      underline: "none",
      color: "white",
      paddingRight: 30,
      fontSize: 20,
    },
    appbarstyle: {
      elevation: 0,
    },
  });

  const { loading, request, error, clearError } = useHttp();
  const { token, login, logout, userId } = useAuth();

  const [currentDesk, setCurrentDesk] = useState({
    name: "",
    description: "",
    id: "",
  });
  const [desks, setDesks] = useState([]);

  const loadDesks = async () => {
    setDesks([]);
    try {
      const tables = await request("/api/tables", "POST", { id: userId });
      setDesks(tables);
    } catch (error) {}
  };

  const addDeskDB = async (name, description) => {
    const id = await request("/api/tables/add", "POST", {
      owner: userId,
      name: name,
      description: description,
    });
    return id;
  };

  const deskChangeHandler = (event) => {
    setCurrentDesk({
      ...currentDesk,
      [event.target.id]: event.target.value,
    });
  };

  const addDesk = (event) => {
    if (currentDesk.name === "") {
    } else {
      currentDesk.id = addDeskDB(currentDesk.name, currentDesk.description);
      desks.push(currentDesk);
      setCurrentDesk({ name: "", description: "", id: "" });
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
        <Button variant="outlined" color="primary" onClick={loadDesks}>
          load
        </Button>
        <TextField
          id="name"
          label="Задать имя доски"
          value={currentDesk.name}
          onChange={deskChangeHandler}
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
          value={currentDesk.description}
          onChange={deskChangeHandler}
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
            {/* {[...Array(this.state.count)].map(() => <DeskField />)} */}
            <div
              style={{
                paddingLeft: "10px",
                paddingTop: "20px",
                paddingRight: "10px",
              }}
            ></div>
          </Grid>
        </Grid>

        {/* </Grid><Button variant="outlined" color="primary">+Добавить доску</Button>  */}
        {/*  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          
        </Typography> */}
      </Container>
    </React.Fragment>
  );
}
export default GuestDesk;

// export default class LogIns extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       count:0

//     }

//   }

//     AddTask = () => {
//       this.setState(({ count }) => ({
//         count: count + 1,
//       }));
//     }

//   render(){

//     const useStyles = makeStyles({
//       linkstyle:{
//         underline: "none",
//         color: "white",
//         paddingRight: 30,
//         fontSize: 20
//       },
//       appbarstyle:{
//         elevation: 0,

//       },
//     });

//     //auth = false;
//     return(
//       <React.Fragment>
//         <div style = {{paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>
//           <TextField
//             id="name"
//             label="Задать имя доски"
//             value={desk.name}
//             onChange={deskChangeHandler}
//             placeholder="Имя доски"
//             fullWidth
//             multiline
//             margin="normal"
//             InputLabelProps={{
//             shrink: true,
//             }}
//             variant="outlined"
//             />

//<TextField
//               id="description"
//               label="Задать описание"
//               onChange={deskChangeHandler}
//               placeholder="Описание доски"
//               fullWidth
//               multiline
//               margin="normal"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="outlined"
//             />
//               </div>
//               <div style={{paddingLeft:"20px", paddingTop:"10px"}}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 onClick={addDesk}
//               >
//                 + Добавить доску
//               </Button>

//           </div>

//<CssBaseline />

//         <Container maxWidth="100%">
//         <Grid container spacing={0} >
//                        <Grid item xs={12} style = {{}}>

//                         {[...Array(this.state.count)].map(() => <DeskField />)}
//                         <div style = {{paddingLeft: "10px", paddingTop: "20px", paddingRight: "10px"}}>

//</div>

//</Grid>
// </Grid>

//         {/* </Grid><Button variant="outlined" color="primary">+Добавить доску</Button>  */}
//          {/*  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>

//           </Typography> */}
//         </Container>
//       </React.Fragment>
//     );
//   }
// }
