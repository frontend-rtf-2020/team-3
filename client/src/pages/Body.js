import React, { Component} from 'react';
import { Button, Typography, Paper, Grid} from '@material-ui/core';
import gogosimon from '../assets/149653.gif';
import rick from '../assets/rick.gif';
import poke from '../assets/1Pxy.gif';
import reap from '../assets/REAP.gif';
import cap from '../assets/CAP.gif';
import gandalf from '../assets/ZSix.gif';
import testpic from '../assets/mainpgart.gif';
import '../App.css';
import Link from '@material-ui/core/Link';

export class Body extends Component{

    render(){

        return(
            <div>
                <div>

                </div>
                <div >
                <Grid
               
                container
                >
                    <Grid
                        item
                        //lg={4}
                    >
                        <div backgroundColor = "#eeeeee">
                            <Paper style = {{borderRadius: 0, backgroundColor: '#eeeeee'}}>
                                <img width = "40%" src = {testpic}  style = {{borderRadius: 0, backgroundColor: '#eeeeee'}} alt = "testpic">
                                
                                </img>

                                
                                <div style = {{width:"50%", float:"right", paddingRight:"5%"}}>
                                    <Typography variant="h5" style = {{textAlign: "center", paddingTop: "10vh", fontSize: "30px"}} >Добро пожаловать на Magma Desk!</Typography>
                                    <Typography  variant="h2"  style = {{textAlign: "justify", fontSize: "20px", paddingTop: "10vh",textAlign:"center", paddingLeft: "3vw", paddingRight: "3vw"}}>Magma Desk - это платформа, для удобного оформления и слежения за Вашими задачами. Зарегистрируйтесь, авторизуйтесь и создавайте свои Доски и Задачи для Ваших нужд!</Typography>
                                    <Typography variant="h5" style = {{textAlign: "center", paddingTop: "10vh", fontSize: "30px"}} >Наша команда: </Typography>
                                
                                    <form>
                            
                            <div style={{paddingLeft: "5%", paddingRight:"5%"}}>
                                <div className="flx6" style={{borderRadius: "25px"}}> 
                                <img className="greet" style={{height: 90}} src={rick} alt="dance" />
                                    <Link href="https://github.com/Gerunis" target="_blank" style={{fontSize:"15px"}} >
                                        Русинов Сергей
                                    </Link>
                                </div>
                                <div className="flx6" style={{borderRadius: "25px"}}>
                                    <img style = {{borderRadius: "30px", height: "90px"}} className="greet"  src={gandalf} alt="dance" />
                                    <Link href="https://github.com/Maxerdan"  target="_blank" style={{fontSize:"15px"}} >
                                        Соколов Максим
                                    </Link>
                                </div>
                                <div className="flx6" style={{borderRadius: "25px"}}>
                                    <img style = {{borderRadius: "30px", height: "90px"}} className="greet"  src={cap} alt="dance" />
                                    <Link href="https://github.com/LuckyLiar"  target="_blank" style={{fontSize:"15px"}} >
                                        Усков Егор
                                    </Link>
                                </div>
                                <div className="flx6" style={{borderRadius: "25px"}}>
                                    <img style = {{borderRadius: "30px", height: "90px"}} className="greet"  src={poke} alt="dance" />
                                    <Link href="https://github.com/needMoreBlood"  target="_blank" style={{fontSize:"15px"}} >
                                        Федулова Елена
                                    </Link>
                                </div>
                                <div className="flx6" style={{borderRadius: "25px"}}>
                                    <img style = {{borderRadius: "30px", height: "90px"}} className="greet"  src={reap} alt="dance" />
                                    <Link href="https://github.com/SeregaGG" target="_blank" style={{fontSize:"15px"}} >
                                        Щербинин Сергей
                                    </Link>
                                </div>
                
                             </div>
                         
                        </form>
                                
                                </div>
                            </Paper>
                            
                        </div>
                    </Grid>

                    {/* <Grid
                    item
                    lg={8}
                    xs={12}
                    
                    >
                        <Paper style = {{borderRadius: 0, backgroundColor: '#eeeeee', height: "100%"}}>
                            
                                
                            
                            
                        
                        </Paper>
                        
                    </Grid>     */}
                </Grid>
                </div>

                {/* информация о сайте */}
                

                
                
                {/* информация о команде */}
                <div>

                </div>
{/*                 <div>
                    
                    <Button color="primary" >Hello World</Button>;
                    <h1>Приветственная страница</h1>
                    <h3>Какой то текст, информация о сайте</h3>
                </div> */}
                
                
            </div>
        );    
           
    }
}
  
export default Body