import React from 'react'
import {Card,Button, Typography,Popover} from '@material-ui/core'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FiberNew from '@material-ui/icons/FiberNew';
import ElPost from './Post'


import useStyles from './styles'

export const PrintSelect = []

export const JsonCostado = []
const Post = ({post,setPostData}) => {
    const classes =useStyles(); //Los estilos del archivo style.js

    const handleCostado =()=>{
        let nuevo = {}
        nuevo.cliente = post.cliente
        nuevo.rut = post.rut
        nuevo.instagram = post.instagram
        nuevo.direccion = post.direccion
        nuevo.telefono = post.telefono
        nuevo.despacho = post.despacho

        nuevo.akashiya = 0
        nuevo.cuadernoAzul= 0
        nuevo.cuadernoRojo= 0
        nuevo.cuadernoRosa= 0
        nuevo.cuadernoVerde= 0
        nuevo.goma= 0
        nuevo.gomaFujiAzul= 0
        nuevo.gomaFujiRosa= 0
        nuevo.grafito= 0
        nuevo.sarasaA04= 0
        nuevo.sarasaN1= 0
        nuevo.sarasaN03= 0
        nuevo.sarasaN04= 0
        nuevo.sarasaR1= 0
        nuevo.sarasaR03= 0
        nuevo.shitajiki= 0
        nuevo.pentel= 0
        nuevo.valorDespacho= 0

        nuevo.horaFecha = new Date().toLocaleString()
        nuevo.todoListo = false
        nuevo.print = false
        nuevo.pagadoTotal = false
        nuevo.pagadoProducto = false
        // console.log(nuevo)
        setPostData({...nuevo})
        
    }
    console.log(post)

    
    // const [open, setOpen] = React.useState(false);
    // const handleOpen2 = () => {
    //     setOpen(true);
    // };

    // const handleClose2 = () => {
    //     setOpen(false);
    // };
    // const body = (
    //     <div className={classes.paper} style={{background:'white', height:'400px'}}>
    //     <ElPost post={post}/>

    //     </div>
    // );
      const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

        return (
            <Card className={classes.card} style={{minHeight:60,maxHeight:100,boxShadow:'1px 1px 4px #00000055',background:'linear-gradient(rgba(255,255,255,1), rgba(255,248,240 ,1)',border:`3px solid ${post.despacho === 'santiago'? 'lightskyblue' : post.despacho === 'region'? 'hotpink': post.despacho === 'metro' ?'limegreen' : '#9E9E9E'}`}}>
     
               
                <Typography onClick={!post.cliente? handleOpen2 : null} style={{cursor:post.cliente? 'default':'pointer',marginLeft:20,marginTop:5, color:'red'}} variant="caption">{post.horaFecha}</Typography>
                <Typography onClick={handleOpen2} className={classes.title} variant="h5" style={{cursor:'pointer', fontSize:15, color:'crimson',marginTop:10 }}>{post.cliente} </Typography>

            <div style={{position:'absolute',right:0, background:'skyblue'}} >
                <Button
                    style={{color:'Black',zIndex:'2'}} 
                    size='small' 
                    onClick={() => handleCostado()}>

                    <FiberNew fontSize="default"/>
                </Button>
             
            </div>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <ElPost post={post}/>
            </Popover>
            {/* <div style={{position:'absolute',right:0,bottom:0, background:'red'}} >

            <Modal
                open={open}
                onClose={handleClose2}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal> */}
            {/* </div> */}

            </Card>

            
    )
}
export default Post
