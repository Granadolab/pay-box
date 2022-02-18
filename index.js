const express = require('express');
const router = require('./routes/router.main');
const env = require('dotenv').config();
const{logErrors, errorHandler, boomErrorHandler } = require('./App/Middlewares/ErrorHandler');

/**
 * @initialize
 */
const app = express();
app.use(express.json());
router(app);

/**
 * @middlewares
 */
 app.use(logErrors);
 app.use(boomErrorHandler);
 app.use(errorHandler);

/**
 * @port
 */

app.listen(process.env.SYSTEM_PORT, ()=>{
    console.log(`Escuchando en el puerto: ${process.env.SYSTEM_PORT}`)
});



// try {
//     db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

