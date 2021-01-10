import React, {useState} from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'

// import {changeList} from '../../actions/posts'

import Post from './Post/Post'

import useStyles from './styles'

    
    //Buscador
    const Posts = ({setCurrentId}) => {
        // const dispatch = useDispatch();
        
        
        const posts = useSelector((state) => state.posts) //posts por .reducer/index.js
        const classes = useStyles(); //Los estilos del archivo style.js
        // console.log("posts",posts)
        // console.log(posts)
        // console.log(setCurrentId)
        
        const listaId = document.getElementById("lista")
        
        const [busca, setBusca] = useState("")
        const reg = new RegExp(busca.toLowerCase())
        const filtrado = posts.filter((post)=>{
            return reg.test(post.cliente.toLowerCase())
        })

    return (
        !posts.length ? <CircularProgress /> :(
           <div style={{fontFamily:'sans-serif',color:'black'}} >
               Buscar por Nombre: <input style={{height:20,margin:'auto', marginTop:10,borderColor:'lightsalmon', borderRadius:7,outline:'none'}} id="searchBar" className="buscador" type="text" placeholder="" onChange={(e)=> setBusca(e.target.value)}></input>
                <div style={{height:20}}></div>
                <Grid id="tarjetas" className={classes.containter} container alignItems="stretch" spacing={2}>

                    {filtrado.map((post)=>(
                        !post.todoListo?
                        
                        <Grid key={post._id} item xs={12} lg={listaId?12:6} xl={listaId?12:4} >
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>:<div key={post._id}></div>
                    ))}
            
                </Grid>
            </div>
            
        )
    );
};
export default Posts
