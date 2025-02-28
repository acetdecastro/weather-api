const express = require("express");
const router = express.Router();
const weatherController = require("../controllers");
const { validateCreateAlert } = require("../middlewares");

router.get("/alerts", weatherController.getWeatherAlerts);
router.post("/alerts", validateCreateAlert, weatherController.createAlert);

module.exports = router;
