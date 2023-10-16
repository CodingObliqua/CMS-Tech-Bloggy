// models/blog.js
const Sequelize = require('sequelize');
const sequelize = require('../config');
// Import the User model here
// const User = require ('./user');

const Blog = sequelize.define('Blog', {
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

// Define the association: a blog post belongs to a user
const associate = (User) => {
  Blog.belongsTo(User); // A blog post belongs to a user
};


module.exports = {
  Blog, 
  associate,
}; // Export the association function