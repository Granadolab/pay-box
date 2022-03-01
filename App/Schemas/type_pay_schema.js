const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(100);

const createTypePaySchema = Joi.object({
  name: name.required()
});

const updateTypePaySchema = Joi.object({
  // id: id.required(),
  name: name
});

const showTypePaySchema = Joi.object({
  id: id.required(),
});



module.exports = {
    createTypePaySchema,
    updateTypePaySchema,
    showTypePaySchema
}
