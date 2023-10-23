const db = require("../../data/db-config");
const { findProducts } = require("./products_model");

const productIsExist= async(req,res,next)=>{
    try {
       const isExist=await findProducts(req.body)
      
        if(!isExist[0]){
            res.status(401).json({message:"There is no such product"})
        }
        else{
            next()
        }

    } catch (error) {
        next(error)
    }
}

module.exports ={
    productIsExist
}