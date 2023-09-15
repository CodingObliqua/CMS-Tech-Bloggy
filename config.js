// config.js
const Sequelize = require('sequelize');

// Define your database connection here
const sequelize = new Sequelize('your_database_name', 'root', 'Changeme', {
  host: 'localhost', 
  dialect: 'mysql',
});

module.exports = sequelize;