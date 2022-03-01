const express = require('express');

const validatorHandle = require('../App/Middlewares/ValidatorHandler');

const {createUserSchema,loginUserSchema, updateUserSchema, showUserSchema} = require('../App/Schemas/user_schema');

const RegisterService = require('../App/Services/Auth/RegisterService.service');
const LoginService = require('../App/Services/Auth/LoginService.service');

const router = express.Router();

const service = new RegisterService();                           
const login = new LoginService();                           



       
  router.post('/login',validatorHandle(loginUserSchema, 'body'), async (req, res) => {
        const {body} = req;
        const user = await login.login(body);
        res.json(user);
  });
  
  router.post('/register',validatorHandle(createUserSchema, 'body'), async (req, res) => {
      const {body} = req;
      const store = await service.createUser(body);
      res.json(store);
  });



module.exports = router;
