const express = require('express');

const app = express();
const cors = require("cors");
const helmet = require("helmet");
const companies_api = require("./companies/companies_router");
const products_api = require("./products/products_router");
const users_api = require("./users/users_router");

app.use(helmet());
app.use(cors());
app.use(express.json());

/* const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('eteData.sqlite3'); */

app.use("/companies", companies_api);
app.use("/users", users_api);
app.use("/products",products_api);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;