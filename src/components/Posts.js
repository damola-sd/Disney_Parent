import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { connect } from "react-redux";
import { getPosts, getComments, deletePost} from '../actions'
import AddPost from './AddPost';

const StyledPosts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    width: 1000px;
    margin: 0 auto;
    
    h1 {
        padding: 5px;
        text-align: center;  
    }

`;

class Posts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
        this.props.getComments();
    }

    componentDidUpdate() {
        this.props.getPosts();
    }
    
    onDeletePost = id => {
        this.props.deletePost(id);
    }

    render() {
        const { posts,  comments } = this.props;
        
        return (
            <StyledPosts>
                <h1> Posts </h1>
                {
                    posts.map(item => {
                        return (
                            <>
                                <Post
                                    key={item.id} post={item} comments={comments} delete={this.onDeletePost}
                                />
                            </>
                        )
                    }) 
                }
                <AddPost />                

            </StyledPosts>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
        comments: state.commentReducer.comments
    };
};

export default connect(
    mapStateToProps,
    { getPosts, getComments, deletePost }
)(Posts);