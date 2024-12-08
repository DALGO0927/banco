const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const empleadoRoutes = require('./routes/empleadoRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', empleadoRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));