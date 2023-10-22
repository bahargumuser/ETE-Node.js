const router =require("express").Router();
const {  insertProducts,findProducts,deleteProducts,updateProducts,getProducts} = require("./products_model");

router.get("/",async (req, res, next) => {
    try {
        const data= await getProducts()
        res.json(data)
    } catch (error) {
        next(error); 
    }
  });

  router.post("/",async (req, res, next) => {
    try {
        let model = {
        product_name: req.body.product_name,
        product_category: req.body.product_category,
        product_amount: req.body.product_amount,
        product_unit: req.body.product_unit,
        companies_id: req.body.companies_id,
        };
        const add = insertProducts(model);
        res.status(201).json({message: "Cong New Product :)", add});
    } catch (error) {
        next(error);
    }
  });
  router.delete("/",async (req, res, next) => {
    try {
        const deleteC = deleteProducts(req.bod);
        res.status(401).json({ message: "See You Next Time :')", deleteC });
    } catch (error) {
        next(error);
    }
  });

  router.post("/update",async (req, res, next) => {
    try {
        const existingProduct = await findProducts(req.body);

        let model = {
        product_id: req.body.product_id,
        product_name: req.body.product_name|| existingProduct.product_name,
        product_category: req.body.product_category || existingProduct.product_category,
        product_amount: req.body.product_amount || existingProduct.product_amount,
        product_unit: req.body.product_unit || existingProduct.product_unit,
        companies_id: req.body.companies_id,
        }

        const updateC = await updateProducts(model);
        res.status(201).json({message: "Update OK :)", updateC})
    } catch (error) {
       next(error);
    }
  });
  
  module.exports= router