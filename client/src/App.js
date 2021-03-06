import React, {useState, useEffect, useRef} from 'react'
import {Container, AppBar, Typography,Grow,Grid,Button,FormControlLabel,Checkbox} from "@material-ui/core"
import {useDispatch} from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"


// import {useAuth0} from '@auth0/auth0-react'

import {ComponentToPrint} from './print/ComponentPrint.js';
import {ComponentSel} from './print/ComponentSel.js';


import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import imagenCamila from './images/imagen.png'
// import LoginButton from './components/LoginButton.js';
// import LogoutButton from './components/LogoutButton.js';




const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes =useStyles(); //Los estilos del archivo style.js
    const dispatch = useDispatch();
    // console.log(setCurrentId)
    const url ='http://localhost:5000/users';  
    let [on, setOn] = useState(false)

    const localImage = localStorage.getItem("photo")

    const [timage, setTimage] = useState("")
    const [image, setImage] = useState(localImage)
    const [contain, setContain] = useState(true)
    
    // console.log(timage)
    const handleClick =()=>{
        on ? setOn(false) : setOn(true)
    }
     
    const getToken = {headers:{authorization: localStorage.getItem("token")} }
    const id = localStorage.getItem("id")
   
    
    
    const postDetails =()=>{
        const data =new FormData()
        data.append("file", timage)
        data.append("upload_preset","recuerdos")
        data.append("cloud_name","llanquihuen")
        fetch("https://api.cloudinary.com/v1_1/llanquihuen/image/upload",{
            method:"post",
            body:data,
        })
        .then(res=>res.json())
        .then(data=>{
            const photoJson = {
                photo:data.url
            }
            axios.patch(`${url}/${id}`,photoJson, getToken);
          if (data.url !== undefined){
                localStorage.setItem("photo", data.url)
                if (data.url !== undefined){
                    setImage(data.url)
                }else{
                    setImage(localImage)
                }
            }
            axios.get(`${url}/`,getToken).then(resp => {
                // console.log(resp.data);
                let uno = resp.data.splice(resp.data.findIndex(item => item._id === id),1)
                if (uno[0].contain !== undefined){
                   setContain(uno[0].contain)
                }else{
                    const containJson = {
                        contain: true
                    }
                    axios.patch(`${url}/${id}`,containJson, getToken);
                    setContain(uno[0].contain)
                }
                
            });
   
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleCover=()=>{
        if (contain === true){
            const containJson = {
                contain: false
            }
            axios.patch(`${url}/${id}`,containJson, getToken);
            setContain(false)

        }else if (contain === false){
            const containJson = {
                contain: true
            }
            axios.patch(`${url}/${id}`,containJson, getToken);
            setContain(true)
        }
    }
    useEffect(() => {
        postDetails()
        // eslint-disable-next-line
    }, [timage])

 
 
    const logOut = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("photo")
        window.location.href='./'
    }


    // const photoIn = async(dat)=>{
    //     await axios.patch(`${url}/${id}`,photoJson, token);
    // }
    const componentRef = useRef();
    const handlePrint = useReactToPrint({ content: () => componentRef.current,});


    const componentRef2 = useRef();
    const handlePrint2 = useReactToPrint({ content: () => componentRef2.current,});


    useEffect(() => {
        document.title="Clientes - Lorem_store"
    }, [])

    useEffect(() => {
        dispatch(getPosts())  ////////2* action->UseEffect ->reducer
    }, [currentId, dispatch,on])

    // const {isAuthenticated} =useAuth0()
    return (
    // <>
    // <LoginButton/>
    // <LogoutButton/>
    //     {isAuthenticated ?(
        <div style={{display:'flex',background:`url(${image})`,backgroundSize:contain?'contain':'cover'}}>
     
        <Container maxWidth="xl" style={{padding:0,flexShrink:10}}>
            <AppBar className={classes.appBar} position="relative" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">Clientes</Typography>
                <img className={classes.image} src={imagenCamila} alt="memories" height="60"/>
                <Button style={{position:'absolute', right:50,background:'crimson',color:'white'}} onClick={logOut}>Cerrar Sesion</Button>

            </AppBar>


            <Grow in>


                <Container maxWidth="xl">
                    <Grid container className={classes.mainContainer} style={{opacity:'93%'}} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12}>
                            <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                                <div style={{height:50}}></div>



                {/* Botones */}
                <div className={classes.container}>
                    {/* <Button style={{color:'black', background:'white'}} href={`http://localhost:5000/posts`} target="_blank">JSON</Button> */}
                    <div>
                    <div style={{ display: "none", background:"red" }}><ComponentToPrint ref={componentRef} /></div>
                    <Button style={{color:'black', background:'white'}} onClick={handlePrint}>Imprimir Etiquetas</Button>
                    </div>

                    <div>
                    <div style={{ display: "none", background:"red" }}><ComponentSel ref={componentRef2} /></div>
                    <Button style={{color:'black', background:'white'}} onClick={handlePrint2}>Imprimir Algunas</Button>
                    </div>

                    <Button id={`${on? 'lista': 'grande'}`} style={{color:`${on? 'white': 'black'}`, background:`${on? 'black': 'white'}`}} onClick={handleClick}>{on? 'Grande': 'Lista'}</Button>
                </div>
            <div style={{height:20}}></div>
                    {/* <Button style={{color:'black', background:'white'}} onClick={buttonClickHandler} id="doPrint">Print</Button> */}
                        </Grid>
                        <Grid item xs={12}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>

                    </Grid>
                <div style={{height:30}}></div>



                </Container>
            </Grow>
                <div style={{position:'relative', bottom:'0%',height:100,background:'linear-gradient(90deg, rgba(255,192,225,.9) 0%, rgba(255,222,220,.95) 30%,rgba(255,222,220,.95) 70%, rgba(255,192,225,.9) 100%)',width:'100%',display:'flex',justifyContent:'center'}}>
                <Button style={{position:'absolute', top:25,left:50,marginRight:10,background:'pink',color:'crimson',fontSize:12, width:220, cursor:'default'}}> Cambiar Fondo <input style={{marginLeft:10}}type="file" onChange={(e)=> setTimage(e.target.files[0])}/> </Button>

                
                    <FormControlLabel style={{position:'absolute', top:31,left: 290}}
                        control={ <Checkbox checked={contain} onChange={(handleCover)} name="cover" />   }
                        label={contain?"Fondo Contenido": "Estirado"}
                    />
               
                    <p style={{textAlign:'center',alignSelf:'center',textTransform:'uppercase',fontFamily: 'Nunito, sans-serif', color:'lightslategray',fontSize:'35px'}}>Sakuranbo.shodo_store</p>
                </div>
                
        </Container>
        
        </div>
     
    )

}

export default App

    // getPosts = useAuth0()

    //-------------------------------   IMPRIMIR UN DIV  useState/useEffect + Vanilla Javascript (BOTON) -------------------------------------

    // const [didClickButton, setDidClickButton] = useState(false)

    // let imprimir = ()=> {
        //         let myElement = document.getElementById('tarjetas');
        //         myElement.style.color = "green";
    //         var printContents = document.getElementById('tarjetas').innerHTML;
    //         var originalContents = document.body.innerHTML;
    //         document.body.innerHTML = printContents;
    //         window.print();
    //         // myElement.classList.remove("mystyle");

    //         document.body.innerHTML = originalContents;
    //         setDidClickButton(false)
    //     }
    // useEffect(() => {
        //     if(didClickButton){
    //         document.getElementById("doPrint").addEventListener("click", imprimir );
    //         return()=>{
    //             document.getElementById("doPrint").removeEventListener("click", imprimir );
    //         }
    //     }else{
    //             document.getElementById("doPrint").addEventListener("click", imprimir );

    //         }
    //     }
    //     ,[didClickButton])

    //     const buttonClickHandler = () => {
        //         setDidClickButton(true)
    //     }