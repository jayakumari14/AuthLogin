const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(3000, () => {
  console.log("listening to port 3000");
});
