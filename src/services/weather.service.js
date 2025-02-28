const weatherRepository = require("../repositories");

exports.getWeatherAlerts = async () => {
  return weatherRepository.getAllAlerts();
};

exports.createAlert = async (message) => {
  return weatherRepository.createAlert(message);
};
