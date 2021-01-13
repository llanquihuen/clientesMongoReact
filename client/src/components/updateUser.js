import React from 'react'
import axios from "axios"

const UpdateUser = () => {
    
    const url ='https://organizarclientes-github.herokuapp.com/users';
    const getToken = {headers:{authorization: localStorage.getItem("token")} }
    
    export const patchUser = (id, patchUser)=> axios.patch(`${url}/${id}`,patchUser, getToken);


    return (
        <div>
            <button onClick={patchUser()}></button>
        </div>
    )
}

export default UpdateUser
