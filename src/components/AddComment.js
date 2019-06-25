import React from 'react';
import styled from 'styled-components';

class AddComment extends React.Component {
    render() {
        return (
            <form>
                <input
                    ref={}
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

export default AddComment;