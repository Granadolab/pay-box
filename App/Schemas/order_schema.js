const Joi = require('joi');

const id = Joi.number().integer();
const type_pay_id = Joi.number().integer();
const status_id = Joi.number().integer();
const amount = Joi.number().precision(2);
const products = Joi.array().min(1);

const name_buyer=Joi.string();
const address_buyer=Joi.string();
const dni_buyer=Joi.number();
const phone_buyer=Joi.number();

const createOrderSchema = Joi.object({
    type_pay_id: type_pay_id.required(),
    status_id: status_id.required(),
    amount: amount.required(),
    products:products.required(),
    name_buyer:name_buyer.required(),
    address_buyer:address_buyer.required(),
    dni_buyer:dni_buyer.required(),
    phone_buyer:phone_buyer.required()
});

const updateOrderSchema = Joi.object({
    type_pay_id: type_pay_id,
    status_id: status_id,
    amount: amount,
    products:products,
    name_buyer:name_buyer,
    address_buyer:address_buyer,
    dni_buyer:dni_buyer,
    phone_buyer:phone_buyer,
});

const showOrderSchema = Joi.object({
  id: id.required(),
});



module.exports = {
    createOrderSchema,
    updateOrderSchema,
    showOrderSchema
}
