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
    password:"$2a$08$2Jd1YXWRuX3NclzG9260Ju/bAQA7kqmg4DCJd9vNETvmDHrXL09My"
    },
    {
      user_id:2,
      fullname:"admin2",
      email:"admin2@gmail.com",
      password:"$2a$08$BmPySgiUOxpX6QLD1Ib/HOEODZxpCcfluqyljkuH.IazvCcpDruKG"
    },
    {
    user_id:3,
    fullname:"admin3",
    email:"admin3@gmail.com",
    password:"$2a$08$4TrC/TUJ575dDGo9QCwNWOh06d2OYSPUONgHib/1TRtXyXf51U0NO"
    },
  ]);
};
