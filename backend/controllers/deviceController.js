const Device = require('../models/device');

const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.findAll();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching devices', error });
  }
};

const activateDevice = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const device = await Device.findByPk(deviceId);
    if (!device) return res.status(404).json({ message: 'Device not found' });

    device.status = true;
    await device.save();
    res.json({ message: 'Device activated', device });
  } catch (error) {
    res.status(500).json({ message: 'Error activating device', error });
  }
};

module.exports = { getAllDevices, activateDevice };