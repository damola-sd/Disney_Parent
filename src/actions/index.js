import axios from 'axios';
import localAxios from '../axios';
import * as types from './actionTypes';


const apiUrl = 'https://disneyparent-backend.herokuapp.com/auth/parents';
export function deletePost(id) {
    return {
        type:types.DELETE_POST,
        payload: id
    };
}

export function deleteComment(id) {
    return {
        type: types.DELETE_COMMENT,
        payload: id,

    };
}

export function addPost(title, attraction, children ) {
    return {
        type: types.ADD_POST,
        payload: {
            title,
            attraction,
            children,
            time: Date.now(),
        }
    }
}

export function addComment ( username, comment ) {
    return {
        type: types.ADD_COMMENT,
        payload: {
            username,
            comment
        }
    }
}

export const register = (username, password, email) => dispatch => {
    const credentials = {
        username, 
        password,
        email,
        accountType: 'parent'
    };
    axios.post(`${apiUrl}/register`)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            console.log(err.message);
        })
}