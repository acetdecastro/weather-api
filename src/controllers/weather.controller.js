const weatherService = require("../services");

exports.getWeatherAlerts = async (req, res, next) => {
  try {
    const alerts = await weatherService.getWeatherAlerts();
    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

exports.createAlert = async (req, res, next) => {
  try {
    const { message } = req.body;
    const alert = await weatherService.createAlert(message);
    res.status(201).json(alert);
  } catch (error) {
    next(error);
  }
};
