const express = require('express');

const validatorHandle = require('../App/Middlewares/ValidatorHandler');

const {verifyToken} = require('../App/Middlewares/Auth');

const {createTypePaySchema, updateTypePaySchema, showTypePaySchema} = require('../App/Schemas/type_pay_schema');

const TypePayService = require('../App/Services/TypePayService.service');

const router = express.Router();

const service = new TypePayService();



  router.get('/', async (req, res) => {
        const status = await service.index();
        res.json(status);
  });
  
  router.post('/',validatorHandle(createTypePaySchema, 'body'), verifyToken,  async (req, res) => {
      const {body} = req;
      const store = await service.store(body);
      res.json(store);
  });
  
  router.get('/show/:id', validatorHandle(showTypePaySchema, 'params'), verifyToken,   async (req, res) => {
  
    const {id} = req.params;
    const show = await service.show(id);
    res.json(show);
  });
  
  router.put('/update/:id',validatorHandle(updateTypePaySchema, 'body'), verifyToken,  async (req, res) => {
  
    const {id} = req.params;
    const {body} = req;
    const update = await service.update(body,id);
    res.json(update);
  });
  
  
  router.delete('/delete/:id',validatorHandle(showTypePaySchema, 'params'), verifyToken,  async (req, res) => {
  
    const {id} = req.params;
    const deleteElement = await service.delete(id);
    res.json(deleteElement);
  });


 module.exports = router;
