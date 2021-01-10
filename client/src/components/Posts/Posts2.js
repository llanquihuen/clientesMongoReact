import React from 'react'
import {Grid} from '@material-ui/core'
import {useSelector} from 'react-redux'

import Post from './Post/Post2'


import useStyles from './styles'


const Posts2 = ({setCurrentId}) => {
        const posts = useSelector((state) => state.posts) //posts por .reducer/index.js
        const classes = useStyles(); //Los estilos del archivo style.js
        // console.log("posts2")
        // console.log(posts)
    //     // const result = words.filter(word => word.length > 6);
        // const post22 = posts.filter((post => post.print===true))

    //  console.log("22")
    //  console.log(post22)
    // // console.log(setCurrentId)
    
    return (
            <Grid className={classes.background} container alignItems="stretch" spacing={3}>
                { posts.map((post)=>(
                    <Grid key={post._id} item xs={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
           
            </Grid>
        
    );
};
export default Posts2
