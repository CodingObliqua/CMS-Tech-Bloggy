// models/comment.js
const Sequelize = require('sequelize');
const sequelize = require('../config');
const Blog = require('./blog');


const Comment = sequelize.define('comment', {
  // Define your comment model fields here
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER, 
    allowNull: false,
  },
});

// Comment.belongsTo(User); // a Comment belongs to a user
// Comment.belongsTo(Blog);

module.exports = Comment;