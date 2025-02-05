const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const sequelize = require("./utils/db");

const app = express();
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log(origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("cors");
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/payments", paymentRoutes);

// Sync database and start server
sequelize.sync({ force: true }).then(() => {
  // force: true برای ایجاد مجدد جداول (در محیط توسعه)
  app.listen(1212, () => {
    console.log("Server is running on port 1212");
  });
});
