//import model
const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//business logic

exports.createComment=async(req,res)=>{
    try{
        // fetch data from request's body
       
        const {post,user,body}=req.body;
        // create a comment object
        const comment=new Comment({
            post,user,body
        })

        //save the new comment into the database
        const savedComment=await comment.save(); 
         // save/create commands(used for database interaction) from mongoose library used for inserting of comment

         // find the Post by ID ,add the new comment to its comments array
         const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id}},{new:true}).populate("comments") .exec();

         // {new:true} ->it shows the updated Post
         //populate the comments array with comment documents(actual comment)
       
      

         res.json({
            post:updatedPost,
         });
         


    }
    catch(error){
      return res.status(500).json({
        error:"Error while creating comment",
      })
    }
}








