const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(100);

const createStatusSchema = Joi.object({
  name: name.required()
});

const updateStatusSchema = Joi.object({
  // id: id.required(),
  name: name
});

const showStatusSchema = Joi.object({
  id: id.required(),
});



module.exports = {
    createStatusSchema,
    updateStatusSchema,
    showStatusSchema
}
