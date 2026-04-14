const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
