const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));

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
app.post("/get-form-data", (req, res) => {
  console.log(req.query);
  res.send("Form Data Received");
});

app.listen(3000);
