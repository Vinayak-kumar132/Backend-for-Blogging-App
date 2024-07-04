//import mongoose
const mongoose=require("mongoose");

// write route handler
const postSchema=new mongoose.Schema({
   title:{
      type:String,
      required:true
   },
   body:{
      type:String,
      required:true,
   },
   likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like",
   }],

   comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
   }]
   
});


//exportin the postSchema as Post.
module.exports=mongoose.model("Post",postSchema);

