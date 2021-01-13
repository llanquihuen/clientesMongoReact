import React,{useState} from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'
import Pagination from '@material-ui/lab/Pagination';
// import {changeList} from '../../actions/posts'

import Post from './Post/PostCostado'


const Posts = ({setCurrentId,setPostData}) => {
    // const dispatch = useDispatch();
    
    const posts = useSelector((state) => state.posts) //posts por .reducer/index.js
    // console.log("posts",posts)


    function compareNumbers(a, b) {
        if  (a.createdAt > b.createdAt){
            return -1
        }
          if  (a.createdAt < b.createdAt){
            return 1
        }
        return 0
        
    }
    
    posts.sort(compareNumbers)
    const losListos = posts.filter((post)=>{
        return post.todoListo === true
    }) 
    // console.log(losListos)
    
    
    //Buscador
    const [busca, setBusca] = useState("")
    const reg = new RegExp(busca.toLowerCase())
    const filtrado = losListos.filter((post)=>{
        return reg.test(post.cliente.toLowerCase())
    })
    // reg.test(post.cliente.toLowerCase())?

    //Paginador
    const [thisPage, setThisPage] = useState(1);
    const [postXpage] = useState(5)

    const indexLpost = thisPage * postXpage;
    const indexFpost = indexLpost - postXpage;
    const currentPost = filtrado.slice(indexFpost,indexLpost)
    const totalPosts = losListos.length
    const totalPages = Math.ceil(totalPosts/postXpage);

    const handleChange = (event, value) => {
        setThisPage(value);
    };
    //Change page
    // const paginate =(pageNumber)=> setThisPage(pageNumber)
    return (
        !posts.length ? <CircularProgress /> :(
            <div >
                <p style={{fontWeight:'bold', fontFamily:'sans-serif',color:'#C51162', margin:'auto',textAlign:'center'}}>Compras Completadas</p>
                
            <Grid style={{height:520,maxWidth:250,margin:'auto',marginTop:16,background:'pink',paddingBottom:30,borderRadius:15,opacity:'97%',boxShadow:'2px 2px 10px #00000088'}}  container alignItems="stretch" spacing={2}>
                <div style={{margin:'auto',fontFamily:'sans-serif',color:'black', paddingTop:10}} >    
                Buscar por Nombre
                </div>
                <input style={{height:20,margin:'auto', marginTop:10,borderColor:'lightsalmon', borderRadius:7,outline:'none'}} id="searchBar2" className="buscador" type="text" placeholder="" onChange={(e)=> setBusca(e.target.value)}></input>
                {currentPost.map((post)=>(
                    <Grid key={post._id} item xs={12}>
                        <Post post={post} setPostData={setPostData}/>
                    </Grid>
                    
                    ))}
                  <Pagination count={totalPages} page={thisPage} onChange={handleChange} />
            </Grid>
            </div>
            
        )
    );
};
export default Posts
