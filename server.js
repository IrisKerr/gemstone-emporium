// configuration express
const express = require("express");
const app = express();
const router = require('./app/router');

// setup des views engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");
app.use(express.static(`${__dirname}/public`));

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});