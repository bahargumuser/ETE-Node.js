const knex = require("knex");
const { NODE_ENV } = require("../../config");
const knexConfig = require("../knexfile");

module.exports = knex(knexConfig[NODE_ENV]);