const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('game_center', 'root', 'Kh@n!1362', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;