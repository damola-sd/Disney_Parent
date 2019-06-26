import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getComments } from '../actions';

class Comments extends React.Component {
    constructor(props) {
        
    }

    componentDidMount() {
        this.getComments();
    }
    render() {
        return (
            <>
                <h3>Comments</h3>
                {
                    this.props.comments.map(comment => {
                        return (
                            <div>
                                <span>{comment.username} says </span>
                                <div>
                                    {comment.comment}
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.commentReducer.comments,
    }
}

export default connect(
    mapStateToProps, 
    { getComments })(Comments);