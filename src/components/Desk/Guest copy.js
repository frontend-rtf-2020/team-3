import React, { Component} from 'react';
import { Nav} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
export class Guest extends Component{

  constructor(props) {
    super(props);
    this.onSetFire = this.AddDesk.bind(this);
  } 

  AddDesk(){
    
  }

    render(){
        return(
            <div>
            <header className="toinline">
              <h2>Username</h2>     
              <p style = {{padding: 10}}><Button style = {{alignItems: 'center'}}href="/" variant="contained">Выход</Button></p>        
            </header>

            <body>
            <p style = {{padding: 10}}><Button style = {{alignItems: 'center'}} onClick={this.AddDesk} variant="contained">Добавить доску</Button></p>
            

            </body>
            </div>
              );
    }
}

export default Guest