import React from 'react';
import styled from 'styled-components';
import Comments from './Comments';

const StyledPost = styled.div`
    color: black;
`;

const getCommentsbyId = id => {

}
const Post = props => {
    return (
        <StyledPost>
            <h4>{props.post.title}</h4>
            Time <strong>{props.post.time}</strong>
            <br></br>
            <span>Attractions</span><h6>{props.post.attraction}</h6>
            <h5>Comments </h5>
            {/* <Comments/> */}

        </StyledPost>
    )
}

export default Post;