
const Post = require("../models/postModel");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const HttpError = require("../models/errorModel");
const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads')); // specify the upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // generate unique suffix
    cb(null, uniqueSuffix + '-' + file.originalname); // set filename with unique suffix
  }
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // limit file size to 2MB
}).single('thumbnail'); // 'thumbnail' is the name of the field in your form

const createPost = async (req, res, next) => {
  try {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // A multer error occurred when uploading
        return next(new HttpError(err.message, 422));
      } else if (err) {
        // An unknown error occurred
        return next(new HttpError(err.message));
      }

      // File uploaded successfully
      if (!req.file) {
        return next(new HttpError('No file uploaded', 422));
      }

      const { title, category, desc } = req.body;
      if (!title || !category || !desc) {
        // Check if all fields are filled
        fs.unlinkSync(req.file.path); // Delete uploaded file if fields are incomplete
        return next(new HttpError('Fill in all fields', 422));
      }

      // Create new post
      try {
        const newPost = await Post.create({
          title,
          category,
          desc,
          thumbnail: req.file.filename // Save filename to database
        });
        res.status(201).json(newPost);
      } catch (error) {
        fs.unlinkSync(req.file.path); // Delete uploaded file if post creation fails
        return next(new HttpError('Post could not be created', 422));
      }
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};


const getPosts = async(req,res,next) => {
    try {
        const posts = await Post.find().sort({
            updatedAt:-1
        })
        res.status(200).json(posts)
    } catch (error) {
        return next(new HttpError(error))
    }
}



const getPost = async(req,res,next) => {
    try {
        const postId = req.params.id
        const post = await Post.findById(postId)
        if(!post){
            return next(new HttpError("post not found",422))


        }
        res.status(200).json(post)
    } catch (error) {
        return next(new HttpError(error))
    }
}



const editPost = async (req,res,next) =>{
    try {
        let fileName
        let newFileName
        let updatedPost
        const postId = req.params.id
        let {title,category,desc} = req.body
        if(!title || ! category || desc.length<12){
            return next(new HttpError("fill in all fields",422))
        }
        if(!req.files){
            updatedPost = await Post.findByIdAndUpdate(postId,{title,category,desc},{new:true})

        }else{
            const oldPost = await Post.findById(postId)
            fs.unlink(path.join(__dirname,'..','uploads',oldPost.thumbnail),async()=>{
                if(err){
                    return next(new HttpError(err))
                }
                

            })
            // upload new thumbnail
            const {thumbnail} = req.files
            if(thumbnail.size>2000000){
                return next(new HttpError("thumbnail too big"))
            }
            fileName = thumbnail.name
            let splittedFileName = fileName.split('.')

            let newFileName = splittedFileName[0]+ uuid() + splittedFileName[splittedFileName.length -1]
            thumbnail.mv(path.join(__dirname,'..','uploads',newFileName),async(err)=>{
                if(err){
                    return next(new HttpError(err))
                }
            })
            updatedPost = await Post.findByIdAndUpdate(postId,{title,category,desc,thumbnail:newFileName},{new:true})
        }

        if(!updatedPost){
            return next(new HttpError("couldnt update",400))
        }
        res.status(200).json(updatedPost)
    } catch (error) {
        return next(new HttpError(error))
    }
}

const deletePost = async(req,res,next)=>{
    try {
        const postId = req.params.id
        if(!postId){
            return next(new HttpError("post unvailable",400))

        }
        const post = await Post.findById(postId)
        const fileName = post?.thumbnail
        fs.unlink(path.join(__dirname,'..','uploads',fileName),async(err)=>{
            if(err){
                return next(new HttpError(err))

            }else{
                await Post.findByIdAndDelete(postId)

            }

        })

        req.json(`post ${postId} deleted `)
    } catch (error) {
        return next(new HttpError(error))

    }
}





module.exports = {createPost,getPosts,getPost,editPost,deletePost}