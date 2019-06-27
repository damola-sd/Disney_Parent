import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { connect } from "react-redux";
import { getPosts, getComments } from '../actions'
import Comments from './Comments';

const StyledPosts = styled.div`
    height: auto;
    width: 1000px;
    margin: 0 auto;
    
    h1 {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
        background-color: lightblue;
    }

`;

class Posts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
        
    }

    
    render() {
        const { posts,  gettingPosts } = this.props;
        
        return (
            <StyledPosts>
                <h1> Posts </h1>
                {
                    posts.map(item => {
                        return (
                            <>
                                <Post
                                    key={item.id} post={item}
                                />
                            </>
                        )
                    })
                }

                <Comments />

            </StyledPosts>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
        comments: state.commentReducer.comment
    };
};

export default connect(
    mapStateToProps,
    { getPosts, getComments }
)(Posts);