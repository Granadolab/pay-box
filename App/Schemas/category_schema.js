const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(100);

const createCategorySchema = Joi.object({
  name: name.required()
});

const updateCategorySchema = Joi.object({
  // id: id.required(),
  name: name
});

const showCategorySchema = Joi.object({
  id: id.required(),
});



module.exports = {
    createCategorySchema,
    updateCategorySchema,
    showCategorySchema
}
