const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_master', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
