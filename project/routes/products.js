const express = require('express');
const router = express.Router();
const products = require('../data/products');

// get all products
router.get('/', (req, res) => {
    res.json(products);
});

// filter by category (brass, bronze)
router.get('/category/:category', (req, res) => {
    const filtered = products.filter(
        p => p.category === req.params.category
    );
    res.json(filtered);
});

// filter by type (statue, cookware)
router.get('/type/:type', (req, res) => {
    const filtered = products.filter(
        p => p.type === req.params.type
    );
    res.json(filtered);
});

// filter by price
router.get('/price/:price', (req, res) => {
    const price = parseInt(req.params.price);
    const filtered = products.filter(p => p.price <= price);
    res.json(filtered);
});

module.exports = router;
