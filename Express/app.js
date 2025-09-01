const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("This is a middleware");
  // res.send("This is a middleware");
  const a = 2;
  const b = 3;
  const c = a + b;
  console.log(c);
  return next();
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.get("/services", (req, res) => {
  res.send("Services Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
