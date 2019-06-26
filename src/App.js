import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './axios/PrivateRoute';
import { getComments, getPosts, register, addComment, addPost, deleteComment, deletePost, updateComment} from './actions'
import './App.css';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route path="/login" component={Register} />
          <PrivateRoute exact path="/posts" component={Posts} />
          
        </>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentsReducer.comments,
    posts: state.postsReducer.posts,
    gettingPosts: state.postsReducer.gettingPosts,
    gettingComments: state.commentsReducer.gettingComments,
    error: state.reducers.error
  };
};

export default connect(
  mapStateToProps,
  { getComments, getPosts, register, addComment, addPost, deleteComment, deletePost, updateComment }
)(App);
