const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const sequelize = require('./utils/db');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/payments', paymentRoutes);

// Sync database and start server
sequelize.sync({ force: true }).then(() => {  // force: true برای ایجاد مجدد جداول (در محیط توسعه)
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});