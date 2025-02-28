const express = require("express");
const weatherRoutes = require("./weather.routes");

const router = express.Router();

router.use("/weather", weatherRoutes);

module.exports = router;
