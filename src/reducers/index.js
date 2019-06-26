import * as types from '../actions/actionTypes';
import { combinedReducers } from 'redux';

const initialState = {
    posts: [],
    comments: [],
    gettingPosts: false,
    gettingComments: false,
    isLoggedIn: false,
    error: ""
}

export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case (types.DELETE_POST):
            return state.filter(posts => posts.id !== action.payload);

        case (types.UPDATE_POST):
            return

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

export function commentsReducer(state = initialState, action) {
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

const reducers = combinedReducers({
    posts: postsReducer,
    comments: commentsReducer
});

export default reducers;