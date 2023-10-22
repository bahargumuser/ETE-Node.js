const app = require("./api/server");

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`${port} working.`);
});
