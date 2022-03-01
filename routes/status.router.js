const express = require('express');

const validatorHandle = require('../App/Middlewares/ValidatorHandler');

const {createStatusSchema, updateStatusSchema, showStatusSchema} = require('../App/Schemas/status_schema');

const StatusService = require('../App/Services/StatusService.service');

const router = express.Router();

const service = new StatusService();



  router.get('/', async (req, res) => {
        const status = await service.index();
        res.json(status);
  });
  
  router.post('/',validatorHandle(createStatusSchema, 'body'), async (req, res) => {
      const {body} = req;
      console.log(body);
      const store = await service.store(body);
      res.json(store);
  });
  
  router.get('/show/:id', validatorHandle(showStatusSchema, 'params'),  async (req, res) => {
  
    const {id} = req.params;
    const show = await service.show(id);
    res.json(show);
  });
  
  router.put('/update/:id',validatorHandle(updateStatusSchema, 'body'), async (req, res) => {
  
    const {id} = req.params;
    const {body} = req;
    const update = await service.update(body,id);
    res.json(update);
  });
  
  
  router.delete('/delete/:id',validatorHandle(showStatusSchema, 'params'), async (req, res) => {
  
    const {id} = req.params;
    const deleteElement = await service.delete(id);
    res.json(deleteElement);
  });


 module.exports = router;
