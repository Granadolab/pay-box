const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(100);
const dni = Joi.number();
const email = Joi.string().email();
const password = Joi.string().min(3).max(24);
const phone = Joi.number();

const createUserSchema = Joi.object({
  name     : name.required(),
  dni      : dni.required(),
  email    : email.required(),
  password : password.required(),
  phone    : phone.required(),
});

const loginUserSchema = Joi.object({
  email    : email.required(),
  password : password.required(),
});

const updateUserSchema = Joi.object({
    name     : name.required(),
    dni      : dni.required(),
    email    : email.required(),
    password : password.required(),
    phone    : phone.required(),
});

const showUserSchema = Joi.object({
  id: id.required(),
});


module.exports = {
    createUserSchema,
    updateUserSchema,
    showUserSchema,
    loginUserSchema
}
