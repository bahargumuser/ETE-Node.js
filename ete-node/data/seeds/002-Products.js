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
        product_name: "Beyaz At",
        product_category: "1",
        product_amount: 20,
        product_unit: 50,
        company_id:1
      },
      {
        product_id: 2,
        product_name: "Panel 10x10",
        product_category: "2",
        product_amount: 20,
        product_unit: 50,
        company_id:2
      },
      {
        product_id: 3,
        product_name: "Gold toast machine",
        product_category: "3",
        product_amount: 20,
        product_unit: 50,
        company_id:3
      },
    ]);
  };