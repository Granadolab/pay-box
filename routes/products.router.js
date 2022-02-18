const express = require('express');
const validatorHandle = require('../App/Middlewares/ValidatorHandler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../App/Schemas/product.shema');

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

module.exports = router;
