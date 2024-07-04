// Driver Code

const express=require('express');
const app=express();

require("dotenv").config();
const PORT =process.env.PORT || 3000;

//middleware
app.use(express.json());//parse the json object

const blog=require("./routes/blog");
//mount 
app.use("/api/v1",blog);

const connectWithDb=require("./config/database");
connectWithDb();

//start server
app.listen(PORT,()=>{
    console.log(`App is started at port no ${PORT}`);
})

//default Route
app.get("/",(req,res)=>{
    res.send("<h1>This is My Homepage<h1>")
})

