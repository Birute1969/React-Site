import React from 'react';
import styled from 'styled-components/macro';


import {
    NavbarContainer,
    NavbarWrap,
    Logo,
    Nav,
    NavLink,
    Search,
    SearchWrap,
    Input,
    ButtonContainer,
    Button
} from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarWrap>
            <Logo/>
            <Nav>
                <NavLink to="/">PAGE LAYOUT</NavLink>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/">ADD</NavLink>
            </Nav>
            <Search>
                <SearchWrap>
                    <Input type="text" placeholder="Symbol/Name"></Input>
                </SearchWrap>
            </Search>
            <ButtonContainer>
                <Button 
                css={`color: #037cff; background: #fff;`}
                >REGISTER
                </Button>
                <Button>LOG IN</Button>
            </ButtonContainer>
        </NavbarWrap>
    </NavbarContainer>
  )
}

export default Navbar