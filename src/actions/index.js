import axios from 'axios';
import localAxios from '../axios';
import * as types from './actionTypes';


const apiUrl = 'https://disneyparent-backend.herokuapp.com/auth/parents';




// export function addPost(title, attraction, children ) {
//     return {
//         type: types.ADD_POST,
//         payload: {
//             title,
//             attraction,
//             children,
//             time: Date.now(),
//         }
//     }
// }

// export function addComment ( username, comment ) {
//     return {
//         type: types.ADD_COMMENT,
//         payload: {
//             username,
//             comment
//         }
//     }
// }

export const login = (username, password, email) => dispatch => {
    const credentials = {
        username, 
        password,
        email,
        accountType: 'parent'
    };
    axios.post(`${apiUrl}/login`, credentials)
        .then(res => {
            console.log(res.data.message);
            dispatch({ type: types.LOGIN, payload: res.data})
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            dispatch({type: types.ERROR, payload: err.message});
            console.log(err.message);
        })
}


export const register = (username, password, email) => dispatch => {
    const credentials = {
        username, 
        password,
        email,
        accountType: 'parent'
    };
    axios.post(`${apiUrl}/register`, credentials)
        .then(res => {
            dispatch({ type: types.REGISTER, payload: res.data})
            
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            dispatch({type: types.ERROR, payload: err.message});
            console.log(err.message);
        })
}

export const getPosts = () => dispatch => {
        axios
        .get('https://disneyparent-backend.herokuapp.com/posts')
        .then(res => {
            dispatch({type: types.GET_POSTS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: types.ERROR, payload: err.message});
        });
};

export const deletePost = (id) => dispatch => {
    localAxios()
        .delete(`https://disneyparent-backend.herokuapp.com/posts/${id}`)
        .then(res => {
            dispatch({ 
                type: types.DELETE_POST,
                payload: id
            });
        })
        .catch (err => {
            dispatch({type: types.ERROR, payload: err.message});
        })
}

export const addPost = (post) => dispatch => {
    localAxios()
        .post(`https://disneyparent-backend.herokuapp.com/posts`, post)
        .then( res => {
            dispatch({type: types.ADD_POST, payload: res.data })
        })
        .catch (err => {
            dispatch({type: types.ERROR, payload: err.message});
        })
}


export const getComments = () => dispatch => {
    localAxios()
    .get('https://disneyparent-backend.herokuapp.com/comments')
    .then(res => {
        dispatch({type: types.GET_COMMENTS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: types.ERROR, payload: err.message});
    });
};

export const addComment = (comment) => dispatch => {
    localAxios()
        .post(`https://disneyparent-backend.herokuapp.com/comments`, comment)
        .then( res => {
            dispatch({type: types.ADD_COMMENT, payload: res.data })
        })
        .catch (err => {
            dispatch({type: types.ERROR, payload: err.message});
        })
}

export const deleteComment = (id) => dispatch => {
    localAxios()
        .delete(`https://disneyparent-backend.herokuapp.com/comments/${id}`)
        .then(res => {
            dispatch({ 
                type: types.DELETE_COMMENT,
                payload: id
            });
        })
        .catch (err => {
            dispatch({type: types.ERROR, payload: err.message});
        })

}

export const updateComment = (id) => dispatch => {
    localAxios()
        .put(`https://disneyparent-backend.herokuapp.com/comments/${id}`)
        .then(res => {
            dispatch({ type: types.UPDATE_COMMENT, payload: res.data })
        })
        .catch (err => {
            dispatch({type: types.ERROR, payload: err.message});
        })
}