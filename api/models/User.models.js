const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UserSchema = new schema({
    username:{
        type:String ,
        required:true ,
        unique:true
    },
    email:{
        type:String , 
        unique:true , 
        required:true
    },
    password:{
        type:String , 
        required:true
    },
    image:{
        type:String
    }
},
{timestamps:true}
)

const UserModel = mongoose.model('user' , UserSchema);

module.exports = {UserModel}