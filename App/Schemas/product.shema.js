const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(100);
const price = Joi.number().precision(2);
const status_id = Joi.number();
const category_id = Joi.number();
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  status_id:status_id.required(),
  category_id:category_id.required()
});

const updateProductSchema = Joi.object({
  // id: id.required(),
  name: name,
  price: price,
  status_id:status_id,
  category_id:category_id
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const showproductSchema = Joi.object({
  id: id.required(),
});



module.exports = { createProductSchema, updateProductSchema, getProductSchema, showproductSchema }
