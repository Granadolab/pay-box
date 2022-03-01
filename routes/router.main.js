const express = require('express');
//* put alll routes below
const productsRouter = require('./products.router');
const CategoryRouter = require('./category.router.js');
const StatusRouter = require('./status.router.js');
const TypePayRouter = require('./typepay.router.js');
const UserRouter = require('./user.router.js');
const AuthRouter = require('./auth.router');
const OrderRouter = require('./order.router');

const  routerApi = (app) => {

    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', CategoryRouter);
    router.use('/status', StatusRouter);
    router.use('/typepay', TypePayRouter);
    router.use('/users', UserRouter);
    router.use('/auth', AuthRouter);
    router.use('/orders', OrderRouter);
    
}


module.exports = routerApi;
