import mongoose from 'mongoose';
const dateNow = new Date();
const fechaHora = dateNow.toLocaleString();

const postSchema = mongoose.Schema({
    direccion: String,
    telefono: String,
    cliente: String,
    rut:String,
    instagram: String,
    selectedFile: String,
    horaFecha:{type:String, default: fechaHora},
    createdAt:{
        type:Date,
        default: new Date(),
    },
    cuadernoAzul:{type:Number, default:0},
    cuadernoRojo:{type:Number, default:0},
    cuadernoVerde:{type:Number, default:0},
    cuadernoRosa:{type:Number, default:0},
    sarasaN1:{type:Number, default:0},
    sarasaR1:{type:Number, default:0},
    sarasaN04:{type:Number, default:0},
    sarasaA04:{type:Number, default:0},
    sarasaN03:{type:Number, default:0},
    sarasaR03:{type:Number, default:0},
    grafito:{type:Number, default:0},
    akashiya:{type:Number, default:0},
    shitajiki:{type:Number, default:0},
    goma:{type:Number, default:0},
    gomaFujiAzul:{type:Number, default:0},
    gomaFujiRosa:{type:Number, default:0},
    pentel:{type:Number, default:0},
    despacho:String,
    valorDespacho:{type:Number, default:0},
    fechaHoraMetro:String,
    pagadoProducto:{type:Boolean,default: false},
    pagadoTotal:{type:Boolean,default: false},
    print:{type:Boolean,default: false},
    todoListo:{type:Boolean,default:false},

});



const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;