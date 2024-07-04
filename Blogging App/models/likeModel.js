//import mongoose
const mongoose=require("mongoose");

// write route handler
const likeSchema=new mongoose.Schema({
   post:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Post",//reference to the post model
   },
   user:{
      type:String,
      required:true,
   }
});


//exporting the likeSchema as Like.
module.exports=mongoose.model("Like",likeSchema);

