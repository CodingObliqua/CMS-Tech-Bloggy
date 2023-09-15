// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../config');

const Blog = sequelize.define('blog', {
  // Define your blog model fields here
});

module.exports = Blog;