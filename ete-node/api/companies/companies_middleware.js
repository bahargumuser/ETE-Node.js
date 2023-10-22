const db = require("../../data/db-config");
const { findCompany } = require("./companies_model");


const companyIsExist= async(req,res,next)=>{
    try {
       const isExist=await findCompany(req.body)
       console.log(isExist[0])
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