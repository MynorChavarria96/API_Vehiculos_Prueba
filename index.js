
require('dotenv').config();
const express = require('express');
const vehicleRoutes = require('./src/routes/vehicleRoutes');
const brandRoutes = require('./src/routes/brandRoutes');
const modelRoutes = require('./src/routes/modelRoutes');

require('./src/config/firebase');

const app = express();
app.use(express.json());
app.use('/vehicles', vehicleRoutes);
app.use('/brands', brandRoutes);
app.use('/models', modelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`API corriendo en http://localhost:${PORT}`)
);

