const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const seed = require('../../seeds/index.js')

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

router.post('/seed', (req, res) => {
    seed.seedAll();
    res.status(200).json({message: 'Successfully Seeded'})
})

module.exports = router;
