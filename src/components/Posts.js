import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { getPosts, getComments } from '../actions'

const StyledPosts = styled.div`
    height: auto;
    width: auto;
    color: red;

`;

class Posts extends Component {

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
                    posts.map(post => {
                        return (
                            <Post
                                post={post}
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
      posts: state.postsReducer.posts
    };
  };

  export default connect(
    mapStateToProps
  )(Posts);