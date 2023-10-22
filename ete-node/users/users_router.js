const router =require("express").Router();

router.get("/",async (req, res, next) => {
    try {
        res.json("Users")
    } catch (error) {
        next(error);
    }
  });
  module.exports=router