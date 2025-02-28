require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares");
const { limiter } = require("./library");
const routes = require("./routes");
const { connectToDatabase } = require("./db");

connectToDatabase();

const app = express();
app.use(express.json());
app.use(cors());
app.use(limiter);

app.use("/api", routes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
