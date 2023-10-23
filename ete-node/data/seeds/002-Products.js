/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex("Products").del();
    await knex("Products").insert([
      {
        product_id: 1,
        product_name: "D",
        product_category: "1",
        product_amount: 20,
        product_unit: 50,
        company_id:1,
        product_status:"Live"      },
      {
        product_id: 2,
        product_name: "E",
        product_category: "2",
        product_amount: 20,
        product_unit: 50,
        company_id:2,
        product_status:"Live"
      },
      {
        product_id: 3,
        product_name: "F",
        product_category: "3",
        product_amount: 20,
        product_unit: 50,
        company_id:3,
        product_status:"Draft"
      },
    ]);
  };