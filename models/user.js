// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('user', {
  // Define your user model fields here
});

module.exports = User;