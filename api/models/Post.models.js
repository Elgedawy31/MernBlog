const mongoose = require('mongoose')
const schema = mongoose.Schema;

const PostSchema = new schema({
    title:{
        type:String ,
        required:true ,
    },
    desc:{
        type:String , 
        required:true
    },

    img:{
        type:String
    },
    author:String
},
{timestamps:true}
)

const PostModel = mongoose.model('post' , PostSchema);

module.exports = {PostModel}