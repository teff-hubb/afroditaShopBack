const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('./middlewares');

const apiProductsRouter = require('./api/products');
const apiPublicRouter = require('./api/publicProducts');
const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');

router.use('/products', checkToken, checkRole('A'), apiProductsRouter);
// todas las peticiones que entren con /api/products lo mando a este apiPrductRouter
router.use('/public_products', apiPublicRouter);
router.use('/clients', checkToken, checkAdmin, apiClientsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;