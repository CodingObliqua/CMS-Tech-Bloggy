// app.js
// Import required modules
const express = require('express');
const exphbs = require('express-handlebars');
// const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Initialize Express.js app
const app = express();
const PORT = process.env.PORT || 3000;
// Import your Sequelize models here
const sequelize = require('./config');
// Import User, Blog and Comment models
const Blog  = require('./models/blog');
const User = require('./models/user');
const Comment = require('./models/comment');



// Use session middleware to store user sessions in the database
app.use(
  session({
    secret: 'Changeme', // Change this to a strong secret
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);
// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());
// Set up middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set up Handlebars.js as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// // Define associations between models
// Blog.belongsTo(User);
// User.hasMany(Blog);
// Comment.belongsTo(User);
// Comment.belongsTo(Blog);

// Define routes and their respective controllers
const userRoutes = require('./controllers/userController'); 
const blogRoutes = require('./controllers/blogController'); 
const commentRoutes = require('./controllers/commentController');

// Use the routes in your application
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.use('/comments', commentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});