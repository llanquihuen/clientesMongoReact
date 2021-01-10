import React from 'react'
import {Card,Button,CardContent, Typography,Checkbox,FormControlLabel,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from 'react-redux'


import {deletePost,updatePost} from '../../../actions/posts'
import imagenEntregado from '../../../images/ENTREGADO2.png'


import useStyles from './styles'

export const PrintSelect = []

const Post = ({post, setCurrentId}) => {
    // console.log(post)
    
    // console.log(setCurrentId(post._id))
    const classes =useStyles(); //Los estilos del archivo style.js
    const dispatch = useDispatch();
    const valorCuadernos = 9400
    const valorSarasa = 2500
    let suma = 0;
    let sumaDespacho = suma;

    // const [state, setState] = React.useState({
    // });

    const handleChange =()=>{
        if(post.print){
            const data = {
                print :false,
            }
            post.print = false
            PrintSelect.splice(PrintSelect.findIndex(item => item._id === post._id),1)
            dispatch(updatePost(post._id,data))
        }else{
            const data = {
                print :true,
            }
            post.print = true
            PrintSelect.push(post)
            console.log(PrintSelect)
            dispatch(updatePost(post._id,data))

        }
    }

    
    const handleChange2 =()=>{
        if(post.todoListo){
            const data = {
                todoListo :false,
            }
            post.print = false
            dispatch(updatePost(post._id,data))
        }else{
            const data = {
                todoListo :true,
            }
            post.print = true
            dispatch(updatePost(post._id,data))

        }
    }
    
    if(post.cuadernoRojo||post.cuadernoAzul||post.cuadernoRosa||post.cuadernoVerde){
        let sumaC = post.cuadernoAzul+post.cuadernoRojo+post.cuadernoRosa+post.cuadernoVerde
        suma = sumaC * valorCuadernos
    }
     if(post.sarasaN1||post.sarasaN04||post.sarasaN03||post.sarasaR03||post.sarasaR1||post.sarasaA04){
        let sumaS = post.sarasaN1+post.sarasaN04+post.sarasaN03+post.sarasaR03+post.sarasaR1+post.sarasaA04
        suma = suma+ (sumaS*valorSarasa)

    }
    if(post.gomaFujiAzul){
        suma = suma+(post.gomaFujiAzul*5000)
    }  
    if(post.gomaFujiRosa){
        suma = suma+(post.gomaFujiRosa*5500)
    } 
    if(post.grafito){
        suma = suma+(post.grafito*2000)
    } 
    if(post.akashiya){
        suma = suma+(post.akashiya*10000)
    } 
    if(post.shitajiki){
        suma = suma+(post.shitajiki*7500)
    } 
    if(post.goma){
        suma = suma+(post.goma*1400)
    } 
    if(post.pentel){
        suma = suma+(post.pentel*8000)
    } 
    if(post.valorDespacho){
        
        sumaDespacho = suma+(post.valorDespacho)
    }

    
    // dispatch(deletePost(post._id))
    // console.log(suma)
    const [open, setOpen] = React.useState(false);

    const borrado =()=>{
        dispatch(deletePost(post._id))
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const listaId = document.getElementById("lista")

        return (
        <Card className={listaId? classes.cardLista : classes.card} style={{background:'linear-gradient(rgba(255,255,255,1), rgba(255,248,240 ,1)',border:`3px solid ${post.despacho === 'santiago'? 'lightskyblue' : post.despacho === 'region'? 'hotpink': post.despacho === 'metro' ?'limegreen' : '#9E9E9E'}`}}>
        {/* <div style={{border:` 1px solid ${post.pagadoTotal?'yellow': post.pagadoProducto? 'lightgreen' : 'rgba(252,228,236 ,1)'}`}}></div>  */}
         {/* <CardMedia className={classes.media} image={post.selectedFile} title={post.title} /> */}
               
                <Typography className={listaId? classes.none :""} style={{marginLeft:20,marginTop:5, color:'red'}} variant="caption">{post.horaFecha}</Typography>
                <Typography className={classes.title} variant="h5" style={{fontSize: listaId? 15 :25,width: listaId? 160:'auto', color:'crimson',marginTop: listaId? 0:10 }}>{post.cliente} </Typography>

            <div className={classes.overlayEdit}>
                <Button
                    style={{color:'Black'}} 
                    size='small' 
                    onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="default"/>
                </Button>
            </div>
                <Typography className={classes.title} style={{fontSize: listaId? 15 :18, marginRight:listaId? 20 :0, width: listaId? 160:'auto', marginTop: listaId? 0:10}}>Rut:{post.rut}</Typography>

            <div className={classes.details}>
                <a className={classes.a} href={`https://www.instagram.com/${post.instagram}`} ><Typography style={{fontSize: listaId? 13 :16}}>Instagram: {listaId?<br></br> :""}{post.instagram}</Typography></a>
            </div>
            <img src={imagenEntregado} alt="entregado" style={{height:'200px', width:'auto',position:'absolute',right:'0px',opacity:'50%',marginTop: post.todoListo? 0 : -1000, marginRight: listaId? 600 : 0}}/>

                <Typography className={classes.title} style={{fontSize: listaId? 15 :17,width: listaId? 260:'auto'}} variant="h6" gutterBottom> {post.direccion} </Typography>
                <Typography className={classes.title} style={{fontSize: listaId? 15 :17,width: listaId? 60:'auto'}} variant="h6" gutterBottom> Despacho: {post.despacho} </Typography>

                <div className={classes.details}>
                    <a className={classes.a}href={`https://api.whatsapp.com/send?phone=+569${post.telefono}`}><Typography>{post.telefono? `Tel +569 ${post.telefono}`: ""}</Typography></a>
                </div>
            <div style={{display:'flex',flexDirection:'column', background:'rgba(255,248,240 ,1)',height:'100%',  overflow:'visible', marginTop:listaId? -20 :10,justifyContent:'space-between'}}>
                <Typography className={classes.title} style={{fontSize: listaId? 15 :20,background: post.pagadoTotal?'yellow': post.pagadoProducto? '#64DD17' : 'rgba(252,228,236 ,1)',paddingLeft:listaId? 5 :20,paddingRight:listaId? 5 :20,marginTop:listaId? 10:0}}>Productos</Typography>
                <CardContent style={{background: post.pagadoTotal?'#FFF59D': post.pagadoProducto? '#CCFF90' : 'rgba(255,248,240 ,1)'}}className={listaId? classes.none : classes.flexprecios}>
                    <Typography variant="body2" component="p">{post.cuadernoAzul ? "Cuaderno Azul: " : ""}  {post.cuadernoAzul ?  post.cuadernoAzul: ""} {post.cuadernoAzul ? ` --> $${post.cuadernoAzul*valorCuadernos}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.cuadernoRojo ? "Cuaderno Rojo: " : ""}  {post.cuadernoRojo ?  post.cuadernoRojo: ""} {post.cuadernoRojo ? ` --> $${post.cuadernoRojo*valorCuadernos}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.cuadernoVerde ? "Cuaderno Verde: " : ""}{post.cuadernoVerde ?  post.cuadernoVerde: ""} {post.cuadernoVerde ? ` --> $${post.cuadernoVerde*valorCuadernos}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.cuadernoRosa ? "Cuaderno Rosado: " : ""}{post.cuadernoRosa ?  post.cuadernoRosa: ""} {post.cuadernoRosa ? ` --> $${post.cuadernoRosa*valorCuadernos}` : ""}</Typography>
                   <Typography variant="body2" component="p">{post.sarasaN1 ? "Sarasa Negro 1.0: " : ""}    {post.sarasaN1 ?  post.sarasaN1: ""}  {post.sarasaN1 ? ` --> $${post.sarasaN1*valorSarasa}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.sarasaR1 ? "Sarasa Rojo 1.0: " : ""}    {post.sarasaR1 ?  post.sarasaR1: ""}  {post.sarasaR1 ? ` --> $${post.sarasaR1*valorSarasa}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.sarasaN04 ? "Sarasa Negro 0.4: " : ""}  {post.sarasaN04 ?  post.sarasaN04: ""}  {post.sarasaN04 ? ` --> $${post.sarasaN04*valorSarasa}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.sarasaA04 ? "Sarasa Azul 0.4: " : ""}   {post.sarasaA04 ?  post.sarasaA04: ""}  {post.sarasaA04 ? ` --> $${post.sarasaA04*valorSarasa}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.sarasaN03 ? "Sarasa Negro 0.3: " : ""}  {post.sarasaN03 ?  post.sarasaN03: ""}  {post.sarasaN03 ? ` --> $${post.sarasaN03*valorSarasa}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.sarasaR03 ? "Sarasa Rojo 0.3: " : ""}   {post.sarasaR03 ?  post.sarasaR03: ""}  {post.sarasaR03 ? ` --> $${post.sarasaR03*valorSarasa}` : ""}</Typography>

                    <Typography variant="body2" component="p">{post.grafito ? "Grafito: " : ""}             {post.grafito ?  post.grafito: ""}  {post.grafito ? ` --> $${post.grafito*2000}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.akashiya ? "Akashiya: " : ""}           {post.akashiya ?  post.akashiya: ""}  {post.akashiya ? ` --> $${post.akashiya*10000}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.shitajiki ? "Shitajiki: " : ""}         {post.shitajiki ?  post.shitajiki: ""}  {post.shitajiki ? ` --> $${post.shitajiki*7500}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.goma ? "Goma: " : ""}                   {post.goma ?  post.goma: ""}  {post.goma ? ` --> $${post.goma*1400}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.gomaFujiAzul ? "Goma Fuji Azul: " : ""}          {post.gomaFujiAzul ?  post.gomaFujiAzul: ""}  {post.gomaFujiAzul ? ` --> $${post.gomaFujiAzul*5000}` : ""}</Typography>
                    <Typography variant="body2" component="p">{post.gomaFujiRosa ? "Goma Fuji Rosada: " : ""}           {post.gomaFujiRosa ?  post.gomaFujiRosa: ""}  {post.gomaFujiRosa ? ` --> $${post.gomaFujiRosa*5500}` : ""}</Typography>

                    <Typography variant="body2" component="p">{post.pentel ? "Lapiz Pentel: " : ""}         {post.pentel ?  post.pentel: ""}  {post.pentel ? ` --> $${post.pentel*8000}` : ""}</Typography>
                    {/* <Typography variant="body2"style={{fontSize:19}} component="p">{post.valorDespacho ? "Despacho: " : ""}      {post.valorDespacho ? ` --> $${post.valorDespacho}` : ""}</Typography> */}

                </CardContent>
                <div>
                    <Typography style={{fontSize: listaId? 10 :15,paddingLeft:listaId? 5 :15,background: post.pagadoTotal?'#FFF59D': post.pagadoProducto? '#CCFF90' : 'rgba(255,248,240 ,1)'}}>{listaId ? "" : "Productos:"} ${suma}</Typography>
                    <div style={{height:listaId? 0 :9,background: post.pagadoTotal?'#FFF59D': 'rgba(255,248,240 ,1)'}}></div>
                    <Typography variant="body2"style={{fontSize: listaId? 14 :18, paddingLeft:listaId? 5 :15,background: post.pagadoTotal?'#FFF59D': 'rgba(255,248,240 ,1)'}} component="p">{post.valorDespacho ? listaId ? "" : "Total + envio:": ""} {post.valorDespacho ? ` $${sumaDespacho}` : ""} {post.fechaHoraMetro? listaId ? "" : "Dia y hora Metro: "+post.fechaHoraMetro : ""}   </Typography>

                    {/* <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
                        <ThumbUpAltIcon fontSize="small" />
                        &nbsp; Like 
                        {` ${post.likeCount}`}
                    </Button> */}
                     <div>
                    <div>
                    <Button className={classes.overlayDelete} size="small" color="primary" onClick={handleClickOpen}>
                        <DeleteIcon fontSize="small" />
                    </Button>
                  
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Borrar Compra"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Esta compra será borrada para siempre de su base de datos.<br></br><br></br>¿Desea continuar?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} style={{background:'#FCE4EC', color:'#757575'}}color="primary">
                                Volver
                            </Button>
                            <Button onClick={borrado} style={{background:'red', color:'whitesmoke'}} autoFocus>
                                Borrar
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    </div>

                    <FormControlLabel style={{marginLeft:listaId? 0 :5, marginTop:listaId? -10 :5}}
                        control={<Checkbox checked={post.print} onChange={(handleChange)} name="printSelection" />}
                        label="Print"
                    />
                         <FormControlLabel style={{borderRadius:10,marginLeft:listaId? 0 :200,marginBottom:5,paddingRight:20, marginTop:listaId? -10 :5,position:listaId? 'absolute' :'relative', background:'#69F0AE'}}
                        control={<Checkbox checked={post.todoListo} onChange={(handleChange2)} name="todoListo" />}
                        label="Todo Listo"
                    />
                </div>
            </div>
        </Card>
    )
}
export default Post
