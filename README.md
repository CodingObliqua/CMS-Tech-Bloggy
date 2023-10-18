# CMS-Tech-Bloggy

CMS-Tech-Bloggy is a web application for managing and publishing tech blogs. It provides features for creating and managing blog posts, user authentication, and commenting on posts.
## Quick Links
- [GitHub Repository](https://github.com/CodingObliqua/CMS-Tech-Bloggy)
- [Heroku Deployment](https://damp-scrubland-92481-fe9300a7e276.herokuapp.com)
- [![Video](https://img.youtube.com/vi/12xk-yk9Hx-w1uJxPwJ3vOvMow3TArNbk/0.jpg)](https://drive.google.com/file/d/12xk-yk9Hx-w1uJxPwJ3vOvMow3TArNbk/view)
## Features

- User registration and authentication.
- Create, edit, and delete blog posts.
- Comment on blog posts.
- View a list of blog posts.
- View a single blog post with comments.
- User profiles.

## Technologies Used

- Node.js
- Express.js
- Sequelize (SQL ORM)
- PostgreSQL (or your chosen database)
- Handlebars (View Engine)
- Passport.js (for authentication)
- HTML, CSS, JavaScript

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/codingobliqua/CMS-Tech-Bloggy.git
   ```
2. Navigate to the project directory:  
``` bash
  cd CMS-Tech-Bloggy
```
3. Install dependencies:
   ``` bash
   npm install
   ```
4. Database Setup:

Create a PostgreSQL database for the application.
Configure the database connection in config/config.json.
5. Run Migrations:
``` bash
npx sequelize db:migrate
```
6. Start the application::
   npm start
7. Access the application:

Open your web browser and go to http://localhost:3000.

## Usage
- Register for a new user account or log in.
- Create, edit, and delete blog posts.
- View blog posts, comments, and user profiles.
## Contributing
Contributions are welcome! Fork the repository, make your changes, and create a pull request.

## License
This project is licensed under the MIT License.
