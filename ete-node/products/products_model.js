const db = require("../data/db-config");

const insertProducts= async (input)=>{
  await db("Products").insert(input)
    return "New product Add :)"
}
const findProducts= async (input)=>{
  await db("Products").where("product_id",input.product_id)
    return "That's Products"
}
const deleteProducts= async (input)=>{
    return await db("Products").where("product_id",input.product_id).del()    
}
const updateProducts= async (input)=>{
  return await db("Products").where("product_id",input.product_id).update(input) 
}
const getProducts= async (input)=>{
  return await db("Products")
}
module.exports ={
    insertProducts,findProducts,deleteProducts,updateProducts,getProducts
}