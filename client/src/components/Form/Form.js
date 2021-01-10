/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper,Radio,RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox,InputAdornment } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';

import useStyles from './styles';
import { createPost,updatePost } from '../../actions/posts';
import Listos from '../Posts/PostsCostado'
// import {JsonCostado} from '../Posts/Post/PostCostado'

const Form = ({currentId, setCurrentId}) => {

    const valorCuadernos = 9400
    const valorSarasa = 2500
    let suma = 0;

    const [postData, setPostData] = useState({
        cliente:"",
        direccion:"",
        telefono:"",
        rut:"",
        instagram:"",
        cuadernoAzul:0,
        cuadernoRojo:0,
        cuadernoVerde:0,
        cuadernoRosa:0,
        sarasaN1:0,
        sarasaR1:0,
        sarasaN04:0,
        sarasaA04:0,
        sarasaN03:0,
        sarasaR03:0,
        grafito:0,
        akashiya:0,
        shitajiki:0,
        gomaFujiAzul:0,
        gomaFujiRosa:0,
        goma:0,
        pentel:0,
        despacho:"",
        valorDespacho:0,
        pagadoProducto:false,
        pagadoTotal:false,
        
   
         
    })
    const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id === currentId): null)
    const classes = useStyles(); //Los estilos del archivo style.js
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post)
       
    }, [post])
    
    // console.log(JsonCostado)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData))
        }
        clear();
    }
    // console.log(postData)

    const clear=()=>{
        setCurrentId(null)
        setPostData({
            cliente:"",
            direccion:"",
            telefono:"",
            rut:"",
            instagram:"",
            cuadernoAzul:0,
            cuadernoRojo:0,
            cuadernoVerde:0,
            cuadernoRosa:0,
            sarasaN1:0,
            sarasaR1:0,
            sarasaN04:0,
            sarasaA04:0,
            sarasaN03:0,
            sarasaR03:0,
            grafito:0,
            akashiya:0,
            shitajiki:0,
            gomaFujiAzul:0,
            gomaFujiRosa:0,
            goma:0,
            pentel:0,
            despacho:0,
            valorDespacho:0,

        })
    }
    const theme = createMuiTheme({
        palette: {
        primary: pink,
        secondary: green,
        },
    });
    
    if(postData.cuadernoRojo||postData.cuadernoAzul||postData.cuadernoRosa||postData.cuadernoVerde){

        let sumaC = Number(postData.cuadernoAzul)+Number(postData.cuadernoRojo)+Number(postData.cuadernoRosa)+Number(postData.cuadernoVerde)
        suma = sumaC * valorCuadernos
        // console.log(sumaC)
    }
    if(postData.sarasaN1||postData.sarasaN04||postData.sarasaN03||postData.sarasaR03||postData.sarasaR1||postData.sarasaA04){
        let sumaS = Number(postData.sarasaN1)+Number(postData.sarasaN04)+Number(postData.sarasaN03)+Number(postData.sarasaR03)+Number(postData.sarasaR1)+Number(postData.sarasaA04)

        suma = suma+ (sumaS*valorSarasa)
    }
    if(postData.gomaFujiAzul){
        suma = suma+(postData.gomaFujiAzul*5000)
    }  
    if(postData.gomaFujiRosa){
        suma = suma+(postData.gomaFujiRosa*5500)
    } 
    if(postData.grafito){
        suma = suma+(postData.grafito*2000)
    } 
    if(postData.akashiya){
        suma = suma+(postData.akashiya*10000)
    } 
    if(postData.shitajiki){
      suma = suma+(postData.shitajiki*7500)
    } 
    if(postData.goma){
      suma = suma+(postData.goma*1400)
    } 
    if(postData.pentel){
      suma = suma+(postData.pentel*7500)
    } 
    
    const handleChange =()=>{
        if (postData.pagadoTotal){
        setPostData({...postData, pagadoTotal:false})         
            // console.log(postData)
        }else{
            setPostData({...postData, pagadoProducto:true, pagadoTotal:true})         

        }
    }

       const handleChange2 =()=>{
        if (postData.pagadoProducto){
        setPostData({...postData, pagadoProducto:false})         
            // console.log(postData)
        }else{
             setPostData({...postData, pagadoProducto:true})         
            // console.log(postData)

        }
    }
    
    useEffect(() => {
        let reg = /[0-9]/
        if(reg.test(postData.telefono[postData.telefono.length-1])){

            if(postData.telefono.length === 5 && postData.telefono.slice(4,5) <= 9){
                let newo = postData.telefono.slice(0,4)+" "+postData.telefono.slice(4,5)
                postData.telefono = newo
                setPostData({...postData, telefono:newo})         
                }
            if(postData.telefono.length === 6 && postData.telefono.slice(5,6) === " " ){
                let newo = postData.telefono.slice(0,4)
                    postData.telefono = newo
                setPostData({...postData, telefono:newo}) 
            }
            if(postData.telefono.length > 9){
                let newo2 = postData.telefono.slice(0,9)
                postData.telefono = newo2
                setPostData({...postData, telefono:newo2})         
            }
        }else{
            let err = postData.telefono.slice(0,postData.telefono.length-1)
            postData.telefono = err
            setPostData({...postData, telefono:err})         
        }
    }, [postData.telefono])

    useEffect(() => {
        let reg = /[kK0-9]/
        if(reg.test(postData.rut[postData.rut.length-1])){
            if(postData.rut.length === 3 && postData.rut.slice(2,3) <= 9){
                let newo = postData.rut.slice(0,2)+"."+postData.rut.slice(2,3)
                postData.rut = newo
                setPostData({...postData, rut:newo})         
            }
                        
            if(postData.rut.length === 3 && postData.rut.slice(2,3) === "."){
                let newo = postData.rut.slice(0,2)
                postData.rut = newo
                setPostData({...postData, rut:newo}) 
            }
            if(postData.rut.length === 7 && postData.rut.slice(6,7) <= 9){
                let newo = postData.rut.slice(0,6)+"."+postData.rut.slice(6,7)
                postData.rut = newo
                setPostData({...postData, rut:newo})         
            }

            if(postData.rut.length === 7 && postData.rut.slice(6,7) === "."){
                let newo = postData.rut.slice(0,6)
                postData.rut = newo
                setPostData({...postData, rut:newo}) 
            }
            if(postData.rut.length === 11 && reg.test(postData.rut.slice(10,11))){
                let newo = postData.rut.slice(0,10)+"-"+postData.rut.slice(10,11)
                postData.rut = newo
                setPostData({...postData, rut:newo})         
            }

            if(postData.rut.length === 11 && postData.rut.slice(10,11) === "-"){
                let newo = postData.rut.slice(0,10)
                postData.rut = newo
                setPostData({...postData, rut:newo}) 
            }
            
            if(postData.rut.length > 12){
                let newo2 = postData.rut.slice(0,12)
                postData.rut = newo2
                setPostData({...postData, rut:newo2})         
            }

        }else{
            let err = postData.rut.slice(0,postData.rut.length-1)
            postData.rut = err
            setPostData({...postData, rut:err})         



        }
    }, [postData.rut])

    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>

        <Paper className={classes.paper} style={{display:'flex',gap:25}}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} style={{flexGrow:1,flexShrink:4,maxWidth:300, minWidth:200}} onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>

            <Typography variant="h6">{ currentId ? "Editando" : "Creando"} un cliente</Typography>
            <TextField  name="cliente" variant="outlined" color="primary" label="Nombre Cliente" fullWidth value={postData.cliente} onChange={(e)=> setPostData({...postData, cliente:e.target.value})}/>
            <TextField  name="rut" variant="outlined" label="Rut" fullWidth value={postData.rut} onChange={(e)=> setPostData({...postData, rut:e.target.value})}/>
            <TextField  name="instagram" variant="outlined" label="Instagram" fullWidth value={postData.instagram} onChange={(e)=> setPostData({...postData, instagram:e.target.value})}/>
            <TextField  name="direccion" variant="outlined" label="Dirección" fullWidth value={postData.direccion} onChange={(e)=> setPostData({...postData, direccion:e.target.value})}/>
            <TextField  name="telefono" variant="outlined" label="Teléfono" InputProps={{ startAdornment: <InputAdornment position="start">+569</InputAdornment>}}
             fullWidth value={postData.telefono} onChange={(e)=> setPostData({...postData, telefono:e.target.value})}/>
            <Button style={{marginBottom:10,background:currentId? 'yellow' : 'lightgreen'}} variant="contained" size="large" type="submit" onClick={(e) => setPostData({...postData, horaFecha: new Date().toLocaleString()})} fullWidth>{ currentId ? "Aceptar" : "crear Nuevo"}</Button>
            <Button style={{marginBottom:10,background:'#AD1457'}} variant="contained" color="primary" size="small" onClick={clear} fullWidth>Cancelar</Button>
            </ThemeProvider>

            </form>
             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form2}`} style={{flexShrink:1,margin:'auto',}} onSubmit={handleSubmit}>
            <Typography style={{textAlign:'center'}}variant="h6">{ currentId ? "Editando" : "Creando"} productos</Typography>
                <Typography>Cuadernos</Typography>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                    <TextField style={{maxWidth:150}} margin="dense"  type="number" name="cuadernoAzul" variant="outlined" label="Cuaderno Azul" fullWidth value={postData.cuadernoAzul} onChange={(e)=> setPostData({...postData, cuadernoAzul:e.target.value})}/>
                    <TextField style={{maxWidth:150}} margin="dense"  type="number" name="cuadernoRojo" variant="outlined" label="Cuaderno Rojo" fullWidth value={postData.cuadernoRojo} onChange={(e)=> setPostData({...postData, cuadernoRojo:e.target.value})}/>
                    <TextField style={{maxWidth:150}} margin="dense"  type="number" name="cuadernoVerde" variant="outlined" label="Cuaderno Verde" fullWidth value={postData.cuadernoVerde} onChange={(e)=> setPostData({...postData, cuadernoVerde:e.target.value})}/>
                    <TextField style={{maxWidth:150}} margin="dense"  type="number" name="cuadernoRosa" variant="outlined" label="Cuaderno Rosado" fullWidth value={postData.cuadernoRosa} onChange={(e)=> setPostData({...postData, cuadernoRosa:e.target.value})}/>
                </div>
            </div>
                <Typography style={{marginTop:15}}>Lapices Sarasa</Typography>
            <div style={{display:'flex', gap:10}}>           
                <div style={{maxWidth:160}}>
                <TextField margin="dense" style={{maxWidth:150}} type="number" name="sarasaN1" variant="outlined" label="Negro 1.0" fullWidth value={postData.sarasaN1} onChange={(e)=> setPostData({...postData, sarasaN1:e.target.value})}/>
                <TextField margin="dense" style={{maxWidth:150}} type="number" name="sarasaR1" variant="outlined" label="Rojo 1.0" fullWidth value={postData.sarasaR1} onChange={(e)=> setPostData({...postData, sarasaR1:e.target.value})}/>
                </div>
                <div style={{maxWidth:160}}>
                <TextField margin="dense" style={{maxWidth:150}} type="number" name="sarasaN04" variant="outlined" label="Negro 0.4" fullWidth value={postData.sarasaN04} onChange={(e)=> setPostData({...postData, sarasaN04:e.target.value})}/>
                <TextField margin="dense" style={{maxWidth:150}} type="number" name="sarasaA04" variant="outlined" label="Azul 0.4" fullWidth value={postData.sarasaA04} onChange={(e)=> setPostData({...postData, sarasaA04:e.target.value})}/>
                </div>
                <div style={{maxWidth:160}}>
                <TextField margin="dense" style={{maxWidth:150}} type="number" name="sarasaN03" variant="outlined" label="Negro 0.3" fullWidth value={postData.sarasaN03} onChange={(e)=> setPostData({...postData, sarasaN03:e.target.value})}/>
                <TextField margin="dense" style={{maxWidth:150}} type="number" name="sarasaR03" variant="outlined" label="Rojo 0.3" fullWidth value={postData.sarasaR03} onChange={(e)=> setPostData({...postData, sarasaR03:e.target.value})}/>
                </div>
            </div>
                <Typography style={{marginTop:15}}>Gomas</Typography>
            <div style={{display:'flex'}}>           
                <div>                
                    <TextField style={{maxWidth:150}} margin="dense" type="number" name="goma" variant="outlined" label="Goma Tombow" fullWidth value={postData.goma} onChange={(e)=> setPostData({...postData, goma:e.target.value})}/>
                </div>
                <div>                
                    <TextField style={{maxWidth:150}} margin="dense" type="number" name="goma" variant="outlined" label="Goma Fuji Azul" fullWidth value={postData.gomaFujiAzul} onChange={(e)=> setPostData({...postData, gomaFujiAzul:e.target.value})}/>
                </div>      
                <div>                
                    <TextField style={{maxWidth:150}} margin="dense" type="number" name="goma" variant="outlined" label="Goma Fuji Rosada" fullWidth value={postData.gomaFujiRosa} onChange={(e)=> setPostData({...postData, gomaFujiRosa:e.target.value})}/>
                </div>
            </div>
            <div style={{display:'flex', marginTop:15}}>           
                <div>
                    <Typography>Grafito</Typography>
                    <TextField style={{maxWidth:190}} margin="dense" type="number" name="grafito" variant="outlined" label="Mitsubishi UNI☆STAR" fullWidth value={postData.grafito} onChange={(e)=> setPostData({...postData, grafito:e.target.value})}/>
                </div>
                <div>                
                    <Typography>Akashiya</Typography>
                    <TextField style={{maxWidth:150}} margin="dense" type="number" name="akashiya" variant="outlined" label="Fudepen" fullWidth value={postData.akashiya} onChange={(e)=> setPostData({...postData, akashiya:e.target.value})}/>
                </div>
                    <div>                
                    <Typography>Pentel</Typography>
                    <TextField style={{maxWidth:150}} margin="dense" type="number" name="pentel" variant="outlined" label="Fudepen" fullWidth value={postData.pentel} onChange={(e)=> setPostData({...postData, pentel:e.target.value})}/>
                </div>
                <div>
                    <Typography>Shitajiki</Typography>
                    <TextField style={{maxWidth:150}} margin="dense" type="number" name="shitajiki" variant="outlined" label="Shitajiki" fullWidth value={postData.shitajiki} onChange={(e)=> setPostData({...postData, shitajiki:e.target.value})}/>
                </div>
            </div>

     
            <div style={{display:'flex', height:50, marginTop:10}}>
                    <Typography>Total Productos: ${suma}</Typography>
                    <FormControlLabel style={{marginTop:-26,paddingLeft:40,color:'darkgreen'}}
                    control={<Checkbox style={{color:'#64DD17'}}checked={postData.pagadoProducto} onChange={(handleChange2)} name="pagadoProductos" />}
                    label="Productos Pagados"
                />
           </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Despacho</FormLabel>
                    <RadioGroup row aria-label="despacho" name="despacho1" value={postData.despacho} onChange={(e)=> setPostData({...postData, despacho:e.target.value})}>
                        <FormControlLabel style={{color:'lightskyblue'}} value="santiago" control={<Radio  style={{color:'lightskyblue'}} />} label="Santiago" />
                        <FormControlLabel style={{color:'hotpink'}} value="region" control={<Radio style={{color:'hotpink'}}/>} label="Region" />
                        <FormControlLabel style={{color:'limegreen'}} value="metro" control={<Radio style={{color:'limegreen'}} />} label="Metro" />
                    </RadioGroup>
                </FormControl>  
                {(postData.despacho !== 'metro')? <TextField  margin="dense"  style={{width:150}}  type="number" name="valorDespacho" variant="outlined" label="Valor Despacho" fullWidth value={postData.valorDespacho} onChange={(e)=> setPostData({...postData, valorDespacho:e.target.value})}/>
               : <TextField margin="dense" value={postData.fechaHoraMetro} onChange={(e)=> setPostData({...postData, fechaHoraMetro:e.target.value})} label="Fecha y Hora"></TextField> }
               <div ></div>
               <FormControlLabel style={{marginLeft:20,justifySelf:'right',paddingRight:10,color:'#FFD600',background:'#424242'}}
                    control={<Checkbox style={{color:'yellow'}}checked={postData.pagadoTotal} onChange={(handleChange)} name="pagadoTotal" />}
                    label="Total Pagado"
                />
            </div>
            </form>

        </Paper>
        <div style={{width:300,display:'flex',}}>
            <Listos setPostData={setPostData}/>
        </div>
        
        </div>

        
    )
}
export default Form
