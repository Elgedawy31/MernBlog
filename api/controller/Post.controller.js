const {PostModel} = require('../models/Post.models.js')
const {UserModel} = require('../models/User.models.js')

//create post
const CreatePost = async (req  ,res ) => {
    try {
        const fileName = `${req.protocol}://${req.headers.host}/${req.destFile}/${req.file.filename}`;
    
    
        const newPost = new PostModel({
          title: req.body.title,
          desc: req.body.desc,
          img: fileName,
          author:req.params.id
        });
    
        const PostData = await newPost.save();
    
       
    
        res.status(200).json({PostData});
      } catch (error) {
        res.status(500).json({ error, message: "from Create Post " });
      }
}

//getAll posts
const GetAllPosts = async (req , res) => {

  try {
    
    const PostsData = await PostModel.find();

    res.status(200).json({PostsData})

  } catch (error) {
    
    res.status(500).json({error , message:'error from Get all posts function'})
  }


}
const getPost = async (req , res) => {

  try {
    
    const getuser = await UserModel.findById(req.params.id);

    res.status(200).json({getuser})

  } catch (error) {
    
    res.status(500).json({error , message:'error from Get all posts function'})
  }


}

const getOnePost = async (req, res) => {

  try {
    const post = await PostModel.findById(req.params.id)

    res.status(200).json({post})

    
  } catch (error) {
    res.status(500).json({error})
  }

}

const DeletePost = async (req , res) => {
try {
  const user = await UserModel.findById(req.body.id)
  const post = await PostModel.findById(req.params.id)

  const restaurantId = user._id.toString().replace(/ObjectId\("(.*)"\)/, "$1");


  if(restaurantId === post.author){
    await PostModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:'done deleted'})
  }else{
    res.status(500).json({message:' sorry you can.t delete post ' })
  }
  
} catch (error) {
  res.status(500).json({error , message:'error from any thing'})
}}

module.exports = {CreatePost , GetAllPosts , getPost , getOnePost , DeletePost}