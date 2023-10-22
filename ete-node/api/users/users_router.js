const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const utils = require("../../secret/utils");
const { findUser, insertUser, deleteUser } = require("./users_model");
const { emailIsValid, passwordIsValid, conflictEmail, userIsExist } = require("./users_middleware");

router.get("/", async (req, res, next) => {
  try {
    res.json("Users");
  } catch (error) {
    next(error);
  }
});
router.post("/login", emailIsValid,passwordIsValid, async (req, res, next) => {
  try {
    const data = await findUser(req.body);
   
    const model = {
      user_id: data.user_id,
      email: req.body.email,
      fullname: data.fullname,
    };
    const token = utils.createToken(model, "1d");

    res.json({ token: token });
  } catch (error) {
    next(error);
  }
});

router.post("/register", conflictEmail, async (req, res, next) => {
  try {
    const model = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    };
    let add = await insertUser(model);
    res.status(201).json(add);
  } catch (error) {
    next(error);
  }
});
router.delete("/",userIsExist, async (req, res, next) => {
  try {
    const deleteU = deleteUser(req.body);
    res.status(401).json({ message: "See You Next Time :')", deleteU });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
