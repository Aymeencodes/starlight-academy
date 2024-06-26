const {Schema,model} = require("mongoose")


const postSchema = new Schema({
    title:{type:String,required:true},
    category:{type:String,enum: ["education","business","science","programming","languages"]},
    desc:{type:String,required:true},
    thumbnail:{type:String,required:true}
},{timestamps:true})




module.exports = model("Post",postSchema)