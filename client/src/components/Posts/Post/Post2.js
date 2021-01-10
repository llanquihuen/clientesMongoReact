import React from 'react'
import {Typography} from '@material-ui/core'

import useStyles from './styles'
// import PrintSelect from './Post'

const Post = ({post}) => {

    const classes =useStyles(); //Los estilos del archivo style.js
    // console.log("post2")
    // console.log(post.print)


    return (
        <div style={{margin:15}}>
        <div className={classes.card2} style={{height:(post.despacho === 'metro')? '120px' :''}}>
            {/* <img src={logo} alt="logo" className={classes.logo} style={{display:(post.despacho === 'metro')? 'none' :'none'}}/> */}
            <div className={classes.overlay3}>    
                <Typography style={{color:'#B33B77',fontSize: (post.despacho === 'metro')? 40 :24,textAlign:(post.despacho === 'metro')? 'center' :'left', marginLeft: (post.despacho === 'metro')? -50 :0, fontFamily: (post.despacho === 'metro')? 'Kaushan Script , cursive':'' ,fontWeight:'bold',textShadow:'2px 2px 8px #ffffff'}} variant="h5">{post.cliente ? "Para: "+post.cliente : (post.despacho === 'metro')? 'Para: @'+post.instagram : "Nombre:"} </Typography>
                <Typography style={{color:'#B33B77',fontSize:20,fontWeight:'bold',textShadow:'2px 2px 8px #ffffff'}}>{(post.despacho === 'metro')? " " :'Rut: '+post.rut}</Typography>

            </div>

            <div style={{height:25}}>
               
            </div>

            <Typography className={classes.title} style={{textShadow:'1px 1px 15px #ffffff'}} variant="h6" gutterBottom> {(post.despacho === 'metro')? " " :'Dirección: '+post.direccion} </Typography>
            <Typography style={{textAlign:'center'}}>{(post.despacho === 'metro')? "@sakuranbo.shodo_store" :''}</Typography>
            <div className={classes.details}>
                    <a className={classes.a}href={`https://api.whatsapp.com/send?phone=+${post.telefono}`}><Typography>{(post.despacho === 'metro')? " " : post.telefono? `Tel +569 ${post.telefono}`: ""}</Typography></a>
            </div>

        </div>
        </div>
    )
}
export default Post
