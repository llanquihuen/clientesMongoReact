import mongoose from 'mongoose';
import bcrypt from'bcrypt';

const userSchema = mongoose.Schema({
    username:{
        type:String,
        lowercase: true,
        required: true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    role:{
        type:String,
        default:"regular",
    },
    password:{
        type:String,
        required:true,
    },
    login_date:{
        type:Date,
        default:Date.now(),
    },
    photo:String,
    contain:{
        type:Boolean,
        default:true,
    },
});

userSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.password,salts).then(hash =>{
            this.password = hash;
            next();
        }).catch(error =>next(error));
    }).catch(error =>next(error));
});

const UserModel = mongoose.model('UserModel',userSchema);
export default UserModel;