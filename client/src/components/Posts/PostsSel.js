import React from 'react'
import {Grid} from '@material-ui/core'
import {useSelector}from 'react-redux'
import Post from './Post/Post2'


import useStyles from './styles'


const Posts2 = ({setCurrentId}) => {

        let posts = useSelector((state) => state.posts) //posts por .reducer/index.js
        const classes = useStyles(); //Los estilos del archivo style.js
   
        posts = posts.filter((post => post.print===true))

     
    
    
    return (
            <Grid className={classes.background} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
           
            </Grid>
        
    );
};
export default Posts2
