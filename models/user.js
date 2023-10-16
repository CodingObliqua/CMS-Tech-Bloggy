// models/user.js
const Sequelize = require('sequelize');
const sequelize = require('../config');
const { associate } = require('./blog');
//Import the Blog  and Comment model here
// const Blog = require('./blog');
// const Comment = require('./comment');

const User = sequelize.define('User', {
  // Define your user model fields here
  username: {
    type: Sequelize.STRING, // Define the data type for the username attribute
    allowNull: false, // Set whether the username can be null
    unique: true, // Set the username to be unique
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

// Import the association function from blog.js
const { associate: associateBlog } = require('./blog');
const Comment = require('./comment');
 
User.associate = (models) => {
  // Define associations between User and Blog models
  User.hasMany(Comment); // Assuming a one-to-many relationship

  // Call the association function for Blog
  associateBlog(models.User);  
};


module.exports = User;