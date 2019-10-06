const sequelize = require('sequelize');
db = new sequelize('contacts', 'jo', '7996', {
    host: 'localhost',
    dialect: 'mysql',
  });

module.exports = db;