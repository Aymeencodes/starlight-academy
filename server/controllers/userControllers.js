const HttpError = require("../models/errorModel")
const HtppError = require("../models/errorModel")
const User = require('../models/userModel')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const registerUser = async(req,res,next) => {
    try {
        const {name,email,password} = req.body
        if(!name||!email||!password){
            return next(new HtppError("fill in all fields",422))
        }
        const newEmail = email.toLowerCase()
        const emailExists = await User.findOne({email:newEmail})
        if(emailExists){
            return next(new HttpError('email exists',422))
        }
        if((password.trim()).length<6){
            return next(new HttpError('password too short',422))

        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password,salt)
        const newUser = await User.create({name,email:newEmail,password:hashedPass,isAdmin:false})
        res.status(201).json(`new User ${newUser.email} registered`)

    } catch (error) {
        return next(new HttpError('User registration failed',422))
    }
}


const loginUser = async(req,res,next) =>{
    try {
        const {email,password} = req.body
        if(!email||!password){
            return next(new HttpError(' fill in all  fields',422))

        }
        const newEmail = email.toLowerCase()
        const user = await User.findOne({email:newEmail})
        if(!user){
            return next(new HttpError('invalid credentials',422))


        }
        const comparePass = await bcrypt.compare(password,user.password)
        if(!comparePass){
            return next(new HttpError("invalid credentials",422))

        }
        const {_id:id,name} = user
        const token = jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.status(200).json({token,id,name})
    } catch (error) {
        return next(new HttpError('User login failed',422))

    }
}


const getUser = async (req,res,next) => {
    try {
        const {id} = req.params
        
        const user = await User.findById(id).select("-password")
        if(!user){
            return next(new HttpError("user not found",422))
        }
        res.status(200).json(user)
    
    
    
    } catch (error) {
        return next(new HttpError(error))
    }
}


module.exports = {registerUser,loginUser,getUser}