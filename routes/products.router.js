const express = require('express');
const validatorHandle = require('../App/Middlewares/ValidatorHandler');
const {createProductSchema, updateProductSchema, getProductSchema, showproductSchema} = require('../App/Schemas/product.shema');

const ProductsService = require('../App/Services/ProductService.service');
const router = express.Router();
const service = new ProductsService();


router.get('/', async (req, res) => {
  const products = await service.index();
  res.json(products);
});

router.post('/',validatorHandle(createProductSchema, 'body'), async (req, res) => {
    const {body} = req;
    const store = await service.store(body);
    res.json(store);
});

router.get('/show/:id', async (req, res) => {

  const {id} = req.params;
  const show = await service.show(id);
  res.json(show);
});

router.put('/update/:id',validatorHandle(updateProductSchema, 'body'), async (req, res) => {

  const {id} = req.params;
  const {body} = req;
  const update = await service.update(body,id);
  res.json(update);
});


router.delete('/delete/:id',validatorHandle(getProductSchema, 'params'), async (req, res) => {

  const {id} = req.params;
  const deleteElement = await service.delete(id);
  res.json(deleteElement);
});



module.exports = router;
