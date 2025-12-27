const express = require("express");
const app = express();
const port = 9000;
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});
app.get("/", (req, res) => {
  console.log("/ route called");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
