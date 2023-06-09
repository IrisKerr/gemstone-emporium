const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");

app.use(express.static(`${__dirname}/public`));