const express = require('express');
//* put alll routes below
const productsRouter = require('./products.router');

const  routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
}


module.exports = routerApi;
