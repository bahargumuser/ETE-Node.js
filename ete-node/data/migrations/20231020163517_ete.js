/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return( knex.schema 
    .createTable("Companies" , (tablo) => {
        tablo.increments("company_id");
        tablo.string("company_name").notNullable();
        tablo.integer("company_legal_number");
        tablo.string("incorporation_country");
        tablo.string("website_url");
        tablo.string("company_status");
    })
    .createTable("Products", (tablo) => {
        tablo.increments("product_id");
        tablo.string("product_name").notNullable();
        tablo.string("product_category"); 
        tablo.integer("product_amount");
        tablo.integer("product_unit");
        tablo.string("product_status");
        tablo.integer("company_id").notNullable().references("company_id").inTable("Companies").onUpdate("CASCADE").onDelete("CASCADE");
    })
    .createTable("Users" , (tablo) => {
        tablo.increments("user_id");
        tablo.string("fullname");
        tablo.string("email").notNullable().unique();
        tablo.string("password").notNullable();
    })
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Users")
    .dropTableIfExists("Products")
    .dropTableIfExists("Companies"); 
};
