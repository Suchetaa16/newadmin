const Shop = require("../models/shop.js");
const shopController={
    addShops :async (req,res)=>{
        const{name,stateName,cityName,countryName,mobileNumber,serviceName}=req.body;
        await Shop.create({
            name,stateName,cityName,countryName,mobileNumber,serviceName
        })
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
        
    },

    
}

    

module.exports=shopController;
