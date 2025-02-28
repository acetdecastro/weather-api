const Joi = require("joi");

const validateCreateAlert = (req, res, next) => {
  const schema = Joi.object({
    message: Joi.string().min(5).max(50).required().messages({
      "string.base": `message should be a text`,
      "string.empty": `message cannot be empty`,
      "string.min": `message should have a minimum length of {#limit}`,
      "string.max": `message should have a maximum length of {#limit}`,
      "any.required": `message is a required`,
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      errors: error.details.map((err) => err.message),
    });
  }

  next(); // Proceed to the controller
};

module.exports = validateCreateAlert;
