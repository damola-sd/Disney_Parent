import React from 'react';
import styled from 'styled-components';
import Comments from './Comments';
import { isTemplateElement } from '@babel/types';

const StyledPost = styled.div`
    color: black;
    height: 200px;
    width: 800px;
    margin-bottom: 10px;
    margin: 0 auto;
    border: 1px solid black;
    background-color: brown;
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
            <h5>Comments </h5>
            <Comments id={props.post.id}/>

        </StyledPost>
    )
}

export default Post;