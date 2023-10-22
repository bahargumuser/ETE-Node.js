const bcrypt = require("bcryptjs");
const db = require("../../data/db-config");
const { findUser, findIdUser } = require("./users_model");


//LOGIN
const emailIsValid = async (req, res, next) => {
    try {
   
      const existUser = await findUser(req.body);
  
      if (!existUser) {
        res.status(401).json({ message: "There is no such user" });
      } else {
        req.user = existUser;
    
        next();
      }
    } catch (error) {
      next(error);
    }
  };


const passwordIsValid = async function (req, res, next) {
  try {
    const { password } = req.body;

   
    let validPassword = bcrypt.compareSync(password, req.user.password);
    console.log(validPassword)
    if (!validPassword) {
      res.status(401).json({ message: "Invalid Password" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
//LOGIN


//REGISTER

const conflictEmail = async (req, res, next) => {
    try {
     
      const isConflict= await  findUser(req.body);
      if(!isConflict)
    {
       next()
    }
    else{
        res.status(402).json({message:"There is such a user"})
    }
    } catch (error) {
      next(error);
    }
  };

//REGISTER


//DELETE

const userIsExist= async(req,res,next)=>{
    try {
       const isExist=await findIdUser(req.body)
       console.log(isExist)
        if(!isExist){
            res.status(401).json({message:"There is no such User"})
        }
        else{
            next()
        }

    } catch (error) {
        next(error)
    }
}



//DELETE
module.exports={
    passwordIsValid,emailIsValid,conflictEmail,userIsExist
}