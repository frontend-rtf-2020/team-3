import React, { Component } from 'react';


import { 
    ActiveNavLink, Container, Logo, NavLink, StyledHeader,
    
} from './Header.styles';


export class Header extends Component{

    render(){
        return(
        <StyledHeader>
           
                    <Container>
                        <Logo>ProGachiGram</Logo>
                        <nav>
                            <NavLink exact to="/" activeStyle={ActiveNavLink}>
                                {'Start'}
                            </NavLink>

                            <NavLink exact to="/app" activeStyle={ActiveNavLink}>
                                {'Messenger'}
                            </NavLink>

                            <NavLink exact to="/registrate" activeStyle={ActiveNavLink}>
                                {'SingIn'}
                            </NavLink>

                            <NavLink exact to="/login" activeStyle={ActiveNavLink}>
                                {'LogIn'}
                            </NavLink>
                        </nav> 
                    </Container>
            
        </StyledHeader> 
        )
    }
}

