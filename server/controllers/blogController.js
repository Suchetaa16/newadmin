const Blog = require("../models/blog.js");
const blogController={
    addBlog :async (req,res)=>{
        const{title,content}=req.body;
        const image=req.body.file;
        await Blog.create({
            title,content
        })
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
        
    },

    // login:async(req,res)=>{
    //    const{email,password}=req.body;
    //    try {
    //     const token=await adminUser.matchPasswordAndGenerateToken(email,password);
    //     return res.json("sucess")
        
    //    } catch (error) {
    //     return res.json(error);
    //    }
    // },

    // logout:async(req,res)=>{
    //     res.clearCookie("token").redirect("/");
    // },
    
}

    

module.exports=blogController;
