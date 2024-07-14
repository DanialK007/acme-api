const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const productRouter = require('./routes/product');

app.use(cors());
app.use('/api/products', productRouter);


// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});