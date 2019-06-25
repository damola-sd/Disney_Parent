import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const StyledPosts = styled.div`

`;

class Posts extends Component {
    render() {
        return (
            <StyledPosts>
                <h3> Posts </h3>
                {
                    this.props.posts.map(post => {
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