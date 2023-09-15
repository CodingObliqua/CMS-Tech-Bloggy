// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../config');

const Comment = sequelize.define('comments', {
  // Define your comment model fields here
});

module.exports = Comment;