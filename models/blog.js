// models/blog.js
const Sequelize = require('sequelize');
const sequelize = require('../config');

const Blog = sequelize.define('blog', {
  // Define your blog model fields here
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER, 
    allowNull: false,
  },
});

Blog.belongsTo(User); // A blog post belongs to a user

module.exports = Blog;