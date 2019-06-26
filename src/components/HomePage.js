import React from 'react';
import styled from 'styled-components';


const StyledHomePage = styled.div`
   background-image: url("../../public/images/image1"); 
`;
export class HomePage extends React.Component {
    render() {
        return (
            <StyledHomePage>
                <h3> Welcome to Disney Parent </h3>
                <p> New User? Register here</p>
                <div>Existing User? Login</div>
            </StyledHomePage>
        )
    }
}