import jwt, { decode } from 'jsonwebtoken'
const authToken =(req,res,next)=>{
    
    if(req.path !== '/auth/login'){
        if(req.path == '/users'){
            if(req.method == 'POST'){
                res.status(200).send({message:"Usuario nuevo creado"})
                next();
            }
        }
        if(req.headers.authorization){
            let token = req.headers.authorization.split(' ')[1]  //Esto lo pasé a actions (api) para el cliente. 
            // console.log(token);
            jwt.verify(token,process.env.SECRET_TOKEN, (error, decoded)=>{
                if (error){
                    return res.status(500).send({message:'No tienes los permisos suficientes, error de token',error});
                }
                if(req.method != 'GET'){
                    if(decoded.role == 'admin') next();
                    else res.status(500).send({message:'No tienes los permisos suficientes,usuario no es admin',error});
                }else{
                // console.log(decoded)
                next();
                }
            })
        }else res.status(403).send({message:'Usted no tiene token'})

    }else next();
}
export default authToken