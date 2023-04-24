const express = require('express');
const { CreatePost, GetAllPosts, getPost, getOnePost, DeletePost } = require('../controller/Post.controller');
const multerfunc = require('../services/MulterFunc')
const router = express.Router();


router.post('/create/:id' , multerfunc().single('img')  , CreatePost)
router.get('/getposts' , GetAllPosts)
router.get('/getuser/:id' , getPost)
router.get('/getpost/:id' , getOnePost)

router.delete('/deletepost/:id' , DeletePost)




module.exports = router