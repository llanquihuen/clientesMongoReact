import axios from "axios"

// const url ='https://organizarclientes-github.herokuapp.com/posts';
const url ='http://localhost:5000/posts'
const getToken = {headers:{authorization: localStorage.getItem("token")}  //esto es para el middle (AuthToken)
}

export const fetchPosts = () => axios.get(url, getToken );
export const createPost = (newPost) => axios.post(url, newPost, getToken);
export const updatePost = (id, updatePost)=> axios.patch(`${url}/${id}`,updatePost, getToken);
export const deletePost = (id) => axios.delete(`${url}/${id}`, getToken);
export const likePost = (id) => axios.patch (`${url}/${id}/likePost`)

