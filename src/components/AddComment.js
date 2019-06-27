import React from 'react';
import styled from 'styled-components';
import { addComment } from '../actions';


const commentRef = React.createRef();
class AddComment extends React.Component {
    
    AddComment = event => {
        event.preventDefault();
        this.props.add
    }
    render() {
        return (
            <form>
                <input
                    ref={commentRef}
                    name="comment"
                    type="text"
                />
                <button
                    type="submit"
                > Add Comment </button>

            </form>
        )
    }
}



export default connect(
    { AddComment }
)(AddComment);