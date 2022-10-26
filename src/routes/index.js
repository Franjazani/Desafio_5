const { Router } = require('express');
const ProductosRouter = require('./productos');

const router = express();

router.use('/products', ProductosRouter);

module.exports = router;