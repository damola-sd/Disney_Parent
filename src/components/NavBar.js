import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 15px;
    padding: 15px;
    background-color: pink;
    border-bottom: 1px solid transparent;
    color: white;

    a {
        text-decoration: none;
        padding: 10px 15px;
        transition: all 0.3s;
    &.active {
        background-color: lightblue;
    }
    &:hover {
        background-color: #fff;
        color: #064acb;
    }
}
`;

class NavBar extends React.Component {
    render() {
      return (
        <StyledNavBar>
          <NavLink to={"/"} >
            Home
          </NavLink>

          <NavLink to={"/posts"} >
            Posts
          </NavLink>
  
          <NavLink to={"/login"} >
            Login/Register
          </NavLink>

          
        </StyledNavBar>
      );
    }
  }
  
  export default NavBar;