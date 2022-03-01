const express = require('express');

const validatorHandle = require('../App/Middlewares/ValidatorHandler');

const {createCategorySchema, updateCategorySchema, showCategorySchema} = require('../App/Schemas/category_schema');

const CategoryService = require('../App/Services/CategoryService.service');

const router = express.Router();

const service = new CategoryService();



  router.get('/', async (req, res) => {
        const category = await service.index();
        res.json(category);
  });
  
  router.post('/',validatorHandle(createCategorySchema, 'body'), async (req, res) => {
      const {body} = req;
      console.log(body);
      const store = await service.store(body);
      res.json(store);
  });
  
  router.get('/show/:id', validatorHandle(showCategorySchema, 'params'),  async (req, res) => {
  
    const {id} = req.params;
    const show = await service.show(id);
    res.json(show);
  });
  
  router.put('/update/:id',validatorHandle(updateCategorySchema, 'body'), async (req, res) => {
  
    const {id} = req.params;
    const {body} = req;
    const update = await service.update(body,id);
    res.json(update);
  });
  
  
  router.delete('/delete/:id',validatorHandle(showCategorySchema, 'params'), async (req, res) => {
  
    const {id} = req.params;
    const deleteElement = await service.delete(id);
    res.json(deleteElement);
  });


 module.exports = router;
