# Hadiqa's Blog

This repository contains the files for Hadiqa's Blog, a user-friendly CMS-style website designed for tech bloggers to easily publish articles and opinions.

## Features

- **Homepage**: Displays existing posts with links to the dashboard and login options.
- **User Authentication**: Sign up and sign in to access and manage content. Signing up requires creating a username and password. Subsequent visits need sign-in to access full functionality.
- **Post Management**: View post titles, creation dates, and full contents. Comments can be added to posts, and posts can be updated or deleted from the dashboard.
- **Dashboard**: Manage posts with options to add new content, update existing ones, and delete posts.
- **Session Management**: Automatically prompts for login after extended inactivity. Allows viewing posts but requires login for content management.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime for building scalable network applications.
- **Express.js**: Web application framework for Node.js, used to handle server routes and middleware.
- **MongoDB**: NoSQL database for storing user data and blog posts.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Handlebars.js**: Templating engine for rendering dynamic HTML pages.
- **Bootstrap**: CSS framework for designing responsive and modern user interfaces.
- **Heroku**: Platform for deploying and hosting the application.

## How to Use

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/HadiqaAziz/CMS-Blog.git
   cd CMS-Blog
   ```

2. **Install Dependencies**

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. **Run the Application**

   Start the application locally:

   ```bash
   npm start
   ```

   Open your web browser and navigate to `http://localhost:3000` to use the blog.

4. **Sign Up/Sign In**

   Create an account by signing up with a username and password. Sign in to access the dashboard and manage posts.

5. **Manage Posts**

   Use the dashboard to add new posts, update existing ones, or delete posts. Comments can be added to individual posts.

6. **Logging Out**

   Use the logout option in the navigation to sign out. Extended inactivity will prompt for login before managing content.

## Deployed Version

You can also access the live version of Hadiqa's Blog at:

[Hadiqa's Blog on Heroku](https://hadiqa-tech-blog-1234-2374fed05503.herokuapp.com/)

## Contributing

Enjoy blogging with Hadiqa's Blog! and Feel free to contribute to the project by opening issues or submitting pull requests.

