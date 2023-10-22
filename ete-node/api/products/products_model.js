const db = require("../../data/db-config");

const insertProducts = async (input) => {
  await db("Products").insert(input);
  return "New product Add :)";
};
const findProducts = async (input) => {
  await db("Products").where("product_id", input.product_id);
  return "That's Products";
};
const deleteProducts = async (input) => {
  return await db("Products").where("product_id", input.product_id).del();
};
const updateProducts = async (input) => {
  return await db("Products")
    .where("product_id", input.product_id)
    .update(input);
};
const getProducts = async () => {
  return await db("Products as p")
    .leftJoin("Companies as c", "p.company_id", "c.company_id")
    .select("p.*", "c.company_name", "c.company_id");
};
module.exports = {
  insertProducts,
  findProducts,
  deleteProducts,
  updateProducts,
  getProducts,
};
