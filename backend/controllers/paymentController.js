const Transaction = require('../models/transaction');
const Device = require('../models/device');
const User = require('../models/user');

const processPayment = async (req, res) => {
  try {
    const { userId, deviceId, amount } = req.body;

    // بررسی وجود کاربر و دستگاه
    const user = await User.findByPk(userId);
    const device = await Device.findByPk(deviceId);
    if (!user || !device) {
      return res.status(404).json({ message: 'User or device not found' });
    }

    // ایجاد تراکنش
    const transaction = await Transaction.create({ userId, deviceId, amount });

    // فعال‌سازی دستگاه (این بخش نیاز به تکمیل دارد)
    // باید با سخت‌افزار ارتباط برقرار کنید و دستگاه را فعال کنید.

    res.status(201).json({ message: 'Payment processed successfully', transaction });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};

module.exports = { processPayment };