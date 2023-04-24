const express = require('express');
const { RegisterFunc , Loginfunc, } = require('../controller/Auth.controller');
const multerFunc = require('../services/MulterFunc');
const router = express.Router()


router.post('/register' , multerFunc().single('avatar')  , RegisterFunc) ;
router.post('/login' ,Loginfunc) ;


module.exports = router
