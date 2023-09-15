// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('user', {
  // Define your user model fields here
  username: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true, //Ensure Usernames are unique
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

User.hasMany(Blog);
User.hasMany(Comment);

module.exports = User;