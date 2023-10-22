const jwt=require("jsonwebtoken");
const {JWT_SECRET} = require("../../config");


exports.createToken=(payload,time)=>{
    return jwt.sign(payload,JWT_SECRET,{expiresIn:time})
}
