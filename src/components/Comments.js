import React from 'react';


class Comments extends React.Component {
    constructor(props) {
        super(props);
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