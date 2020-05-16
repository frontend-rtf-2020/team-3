import React, { Component} from 'react';
import { Button } from '@material-ui/core';

export class Body extends Component{

    render(){
        return(
            
            <div>
                
                <Button color="primary" >Hello World</Button>;
            <h1>Приветственная страница</h1>
            <h3>Какой то текст, информация о сайте</h3>
            </div>
              );
    }
}
  
export default Body
