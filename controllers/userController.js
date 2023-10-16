// controllers/userController.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create a new user in the database with the hashed password
    const newUser = await User.create({
        username,
        password: hashedPassword,
    });
    // Redirect to login page or perform other actions
  } catch (error) {
    // Handle error
    console.error(error);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: {username} });

    if (!user) {
        //User not found
        // Redirect or respond with an error message
    } else {
        const isPasswordValid = await bcrypt.compare(password, user.password)
        
        if (isPasswordValid) {
            // Password is valid, create a session and log the user in
            req.login(user, (err) => {
                if(err) {
                    // Handle login error
                    console.error(err);
                } else {
                    // Redirect to a protected route or dash
                }
            });
        } else {
            // Password is incorrect
            // Redirect or respond with an error message
        }
    }
  } catch (error) {
    // handle login error
    console.error(error);
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout(); // Passport method to log out
  // Redirect to the home page or login page
});

module.exports = router;