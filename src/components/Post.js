import React from 'react';
import styled from 'styled-components';
import Comments from './Comments';

const StyledPost = styled.div`
    color: black;
    height: 120px;
    width: 800px;
    margin: 0 auto;
    border: 1px solid black;
    background-color: white;
`;

const getCommentsbyId = id => {

}
const Post = props => {
    return (
        <StyledPost>
            <h4>{props.post.title}</h4>
            <strong>Time: {props.post.time}</strong>
            <br></br>
            <strong> Attractions: {props.post.attraction} </strong>
            {/* <h5>Comments </h5> */}
            {/* <Comments/> */}

        </StyledPost>
    )
}

export default Post;