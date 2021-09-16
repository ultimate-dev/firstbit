const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const configs = require("../configs");

// Routes
const mainRoutes = require("../routes/main");
const panelRoutes = require("../routes/panel");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("jwt_key", configs.jwt_key);

//Statics
app.use("/compress", express.static("compress"));
panelRoutes(app);

mainRoutes(app);

module.exports = app;
