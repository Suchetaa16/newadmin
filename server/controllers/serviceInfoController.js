const ServiceInfo = require("../models/serviceInfo.js");
const serviceInfoController={
    addserviceInfo :async (req,res)=>{
        const{title,content}=req.body;
        await ServiceInfo.create({
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

    

module.exports=serviceInfoController;
