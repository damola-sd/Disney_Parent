import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { connect } from "react-redux";
import { getPosts } from '../actions'

const StyledPosts = styled.div`
    height: auto;
    width: auto;
    color: red;

`;

class Posts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, gettingPosts } = this.props;
        if(gettingPosts) {
            return <div> Fetching Posts ...</div>
        }
        return (
            <StyledPosts>
                <h3> Posts </h3>
                {
                    posts.map(item => {
                        return (
                            <Post
                                key={item.id} post={item}
                            />
                        )
                    })
                }

            </StyledPosts>
        )
    }
}

const mapStateToProps = state => {
    return {
      posts: state.postReducer.posts,
    //   gettingPosts: state.postsRgettingPosts
    };
  };

  export default connect(
    mapStateToProps,
    { getPosts }
  )(Posts);