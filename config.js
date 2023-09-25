// config.js
const Sequelize = require('sequelize');

// Define your database connection here
const sequelize = new Sequelize('techblogdb', 'root', 'Changeme', {
  host: 'localhost', 
  dialect: 'mysql',
});

module.exports = sequelize;