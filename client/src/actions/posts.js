import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes'
import * as api from '../api';

//Action Creators ////////////1* ACCION-USE_EFFECT-REDUCER sigue en App.js
export const getPosts = () => async (dispatch) => {     //async thunk porque fetch se demora :)
    try {
        console.log("action-Fetch")
        const {data} = await api.fetchPosts();
        dispatch({                      //dispatch en vez de return por lo asincrono
            type:FETCH_ALL,
            payload: data});            //el payload se lleva a reducers para que ejecute la acción
    } catch (error) {
        console.log(error.message)
    }
    

}

export const createPost = (post) => async (dispatch) => {
    try {
        console.log("action-create")
        console.log(post)
        const {data} = await api.createPost(post)
        console.log(data)
        dispatch({type:CREATE, payload: data})
    } catch (error) {
                console.log(error.message)

    }

}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        const {data}= await api.updatePost(id, post);
        dispatch ({type: UPDATE, payload:data})
    } catch (error) {
        console.log(error)
        
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch ({type: DELETE, payload:id})

    } catch (error) {
        console.log(error)

    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data}= await api.likePost(id);
        dispatch ({type: UPDATE, payload:data})
    } catch (error) {
        console.log(error)
        
    }
}


// export const changeList = (vista) => {
//     return ({
//         type: LISTA,
//         payload: vista
//     })
// }
