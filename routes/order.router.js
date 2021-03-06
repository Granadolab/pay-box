const express = require('express');

const validatorHandle = require('../App/Middlewares/ValidatorHandler');

const {verifyToken} = require('../App/Middlewares/Auth');

const {createOrderSchema, updateOrderSchema, showOrderSchema} = require('../App/Schemas/order_schema');

const OrderService = require('../App/Services/OrderService.service');

const router = express.Router();

const service = new OrderService();

const User = require('../App/Models/User');



  router.get('/',verifyToken, async (req, res) => {
  
       const status = await service.index();
        res.json(status);
  });
  
  router.post('/',validatorHandle(createOrderSchema, 'body'), verifyToken,  async (req, res) => {
      
      const store = await service.store(req);
      res.json(store);
  });
  
  router.get('/show/:id', validatorHandle(showOrderSchema, 'params'), verifyToken,   async (req, res) => {
  
    const {id} = req.params;
    const show = await service.show(id);
    res.json(show);
  });
  
  router.put('/update/:id',validatorHandle(updateOrderSchema, 'body'), verifyToken,  async (req, res) => {
  
    const {id} = req.params;
    const update = await service.update(req,id);
    res.json(update);
  });
  
  
  router.delete('/delete/:id',validatorHandle(showOrderSchema, 'params'), verifyToken,  async (req, res) => {
  
    const {id} = req.params;
    const deleteElement = await service.delete(id);
    res.json(deleteElement);
  });


 module.exports = router;
