const Joi = require('joi');

const id = Joi.number().integer();
const type_pay_id = Joi.number().integer();
const status_id = Joi.number().integer();
const amount = Joi.number().precision(2);
const products = Joi.array().min(1);

const createOrderSchema = Joi.object({
    type_pay_id: type_pay_id.required(),
    status_id: status_id.required(),
    amount: amount.required(),
    products:products.required()
});

const updateOrderSchema = Joi.object({
    type_pay_id: type_pay_id,
    status_id: status_id,
    amount: amount
});

const showOrderSchema = Joi.object({
  id: id.required(),
});



module.exports = {
    createOrderSchema,
    updateOrderSchema,
    showOrderSchema
}
