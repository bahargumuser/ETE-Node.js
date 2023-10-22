const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('eteData.db');

app.get('/', (req, res) => {
  res.send('Hello, word!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`${port} working.`);
});
