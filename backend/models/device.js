const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Device = sequelize.define('Device', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ip_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Device;