/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return( knex.schema 
    .createTable("Companies" , (tablo) => {
        tablo.increments("companies_id");
        tablo.string("company_name").notNullable();
        tablo.integer("company_legal_number");
        tablo.string("incorporation_country");
        table.string("website_url");
    })
    .createTable("Products", (tablo) => {
        tablo.increments("product_id");
        tablo.string("product_name").notNullable();
        tablo.string("product_category"); 
        tablo.integer("product_amount");
        tablo.integer("product_unit");
        tablo.integer("companies_id").notNullable().references("companies_id").inTable("Companies").onUpdate("CASCADE").onDelete("CASCADE");
    })
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
