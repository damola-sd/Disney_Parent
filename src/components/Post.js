import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.div`

`;

const Post = props => {
    return (
        <StyledPost>
            <h4>{props.title}</h4>
            Time <strong>{props.time}</strong>
            <br></br>
            <span>Attractions</span><h6>{props.attraction}</h6>
            

        </StyledPost>
    )
}

export default Post;