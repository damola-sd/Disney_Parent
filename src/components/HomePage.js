import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../image3.jpg'

const StyledHomePage = styled.div`
   
   img {
       
       object-fit: contain;
       margin-left: 35px; 
       box-shadow: 5px 10px black;
   }

   h3 {
       margin-left: 50px;
   }

   p {
    margin-left: 45px;
   }
`;
export class HomePage extends React.Component {
    render() {
        return (
            <StyledHomePage>
                <img src={backgroundImage} alt="Theme park"/>
                <h3> Disney Parents </h3>
                <p> This is a community of parents visiting Disney theme parks around the world. If you need help chaperoning your kids, Register and post here and someone will be along to help you in no time. Have a wonderful time!!!</p>
                
            </StyledHomePage>
        )
    }
}