/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("Companies").del();
    await knex("Companies").insert([
      {
        company_id: 1,
        company_name: "A",
        company_legal_number: 1,
        incorporation_country: "TURKEY",
        website_url: "www.google.com",
        company_status:"Live"
      },
      {
        company_id: 2,
        company_name: "B",
        company_legal_number: 2,
        incorporation_country: "TURKEY",
        website_url: "www.google.com",
        company_status:"Live"
      },
      {
        company_id: 3,
        company_name: "C",
        company_legal_number: 3,
        incorporation_country: "TURKEY",
        website_url: "www.google.com",
        company_status:"Live"
      },
    ]);
  };