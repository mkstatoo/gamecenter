const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('game_center', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;