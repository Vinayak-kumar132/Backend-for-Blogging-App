const Post=require("../models/postModel");

exports.createPost=async(req,res)=>{
    // there are 2 ways 1st->using create func on model
    // 2nd-> create post object and save it
    try{
       const {title,body}=req.body;

       const post=new Post({ //object creation
        title,body,
       });
      
       const savedPost=await post.save();
       res.json({
        post:savedPost,
       });
    }
    catch(error){
      return res.status(400).json({
        error:"Error while creating post",
      });
    }
};


exports.getAllPosts=async (req,res)=>{
    try{
       const posts= await Post.find().populate("likes")
   .populate("comments").exec();

       res.json({
        posts,
       })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while fetching post",
        })

    }
}