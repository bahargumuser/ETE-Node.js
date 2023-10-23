const db = require("../../data/db-config");
const { findCompany } = require("./companies_model");


const companyIsExist= async(req,res,next)=>{
    try {
       const isExist=await findCompany(req.body)
      
        if(!isExist[0]){
            res.status(401).json({message:"There is no such company"})
        }
        else{
            next()
        }

    } catch (error) {
        next(error)
    }
}

module.exports ={
    companyIsExist
}