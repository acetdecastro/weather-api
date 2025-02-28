function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  console.log(err.stack);
  res.status(statusCode);
  res.json({
    stack:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.stack,
    message: err.message,
    response: err.response && err.response.data ? err.response.data : null,
  });
}

module.exports = errorHandler;
