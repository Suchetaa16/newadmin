const {Schema,model}=require("mongoose");
const serviceInfoSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    // image:{
    //    type:String,
    //     required:true,
    // }
},{timestamps:true}
);
const ServiceInfo=model('serviceInfo',serviceInfoSchema)
module.exports=ServiceInfo;