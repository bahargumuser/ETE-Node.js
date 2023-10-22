/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex("Users").del();
    await knex("Users").insert([
      {
      user_id:1,
      fullname:"admin1",
      email:"admin1@gmail.com",
      password:"1234"
      },
      {
        user_id:2,
        fullname:"admin2",
        email:"admin2@gmail.com",
        password:"1234"
      },
      {
      user_id:3,
      fullname:"admin3",
      email:"admin3@gmail.com",
      password:"1234"
      },
    ]);
  };