import React from 'react';
import styled from 'styled-components';
// import Comments from './Comments';


const StyledPost = styled.div`
    
    color: black;
    height: auto;
    width: auto;
    margin-bottom: 2px;
    border: 1px solid black;
    background-color: lightgray;
    box-shadow: 4px 4px gray;

    button {
        padding: 5px;
        margin: 10px;
        width: 120px;
        border-radius: 5px;
        background-color: cyan;
    }
`;




class Post extends React.Component {
    
    
    getCommentsbyId = id => {
        return this.props.comments.filter(comment =>  comment.post_id !== id)
    
    } 
    render() {
        return (
            <StyledPost>
                <p>
                    <strong>{this.props.post.title}</strong>
                    <div>Time: {this.props.post.time}</div>
                    <div>Attracton: {this.props.post.attraction}</div>
                    <div>Number of Children: {this.props.post.children}</div>
                    <button onClick={() => {this.props.delete(this.props.post.id)}}>Delete Post</button>
                </p>
            </StyledPost>

        )
    }

}

export default Post;