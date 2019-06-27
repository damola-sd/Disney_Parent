import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialPosts = {
    posts: [],
    gettingPosts: false,
    isLoggedIn: false,
    message: "",
    error: null
}

const initialComments = {
    comments: [],
    gettingComments: false,
    error: null
}
export const postsReducer = (state = initialPosts, action) => {
    switch (action.type) {
        case (types.LOGIN):
            return {
                ...state,
                isLoggedIn: true,
                message: action.payload.message
            }
        case (types.DELETE_POST):
            return state.filter(posts => posts.id !== action.payload);

        case (types.UPDATE_POST):
            return types.GET_POSTS;

        case (types.GET_POSTS):
            return {
                ...state,
                posts: action.payload,
                gettingPosts: true
            }
        case (types.ADD_POST):
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

export const commentsReducer = (state = initialComments, action) => {
    switch (action.type) {
        case (types.DELETE_COMMENT):
            return state.filter(comments => comments.id !== action.payload);
        case (types.GET_COMMENTS):
            return {
                ...state,
                comments: action.payload,
                gettingComments: true
            }
        case (types.ADD_COMMENT):
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    postReducer: postsReducer,
    commentReducer: commentsReducer,
    
});

