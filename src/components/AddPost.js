import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addPost } from '../actions';

const StyledForm = styled.form`
     input {
        margin-left: 300px;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        width: 500px;
        font-size: 16px;
    }

    button {
        width: 100px;
        padding: 10px;
        font-size: 12px;
        background-color: cyan;
        margin-left: 200px;
    }
`;

const titleRef = React.createRef();
const attractionRef = React.createRef();
const childrenRef = React.createRef();


class AddPost extends React.Component {

    onAddPost = event => {
        event.preventDefault();
        const post = {
            parent_id: 1,
            title: titleRef.current.value,
            attraction: attractionRef.current.value,
            children: childrenRef.current.value,
            time: Date(Date.now())
        }
        this.props.addPost(post)
        titleRef.current.value = "";
        attractionRef.current.value = "";
        childrenRef.current.value = "";
    }
    render() {
        return (
            <StyledForm onSubmit={this.onAddPost}>
                <input
                    ref={titleRef}
                    name="title"
                    type="text"
                    placeholder="Post Title"
                />

                <input
                    ref={attractionRef}
                    name="attraction"
                    type="text"
                    placeholder="Site Attraction"
                />

                <input
                    ref={childrenRef}
                    name="children"
                    type="number"
                    placeholder="Number of Children"
                />
                <br />
                <button
                    type="submit"
                > Add Post </button>

            </StyledForm>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingPosts: state.postReducer.addingPosts,
    };
};

export default connect(
    mapStateToProps,
    { addPost }
)(AddPost);