# Ecommerce-Follow-Along
#Milestone 1:#
Overview:
ShopEase is a robust e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It is designed to offer users a seamless shopping experience, providing easy browsing, secure transactions, and personalized recommendations. This project is a practical implementation of full-stack development concepts.

Key Features:

Product Catalog: Browse and search through a variety of products effortlessly.

User Authentication: Secure login and registration system for personalized user experiences.

Shopping Cart: Add, update, or remove items before proceeding to checkout.

Order Management: Track orders, view order history, and handle payments securely.

Admin Panel: Manage products, orders, and users with administrative controls.



Tech Stack:
Front-End: React — for building an interactive and responsive user interface.

Back-End: Node.js with Express — for server-side logic and API handling.

Database: MongoDB — for efficient storage and retrieval of product, user, and order data.


Why This Project?

This project aims to simulate the development of a real-world e-commerce platform while giving hands-on experience with the MERN stack. It’s a great way to understand the interplay between the front-end, back-end, and database, while solving a common user problem: making online shopping simple and enjoyable.


#Milestone 2#:
Description
In Milestone 2, I focused on structuring the project and setting up the frontend and backend for the e-commerce application. This milestone involved configuring the development environment, creating a functional login page, and laying the foundation for future API integrations.

What I Learned
Project Folder Structure: I organized the project files into separate directories for the frontend (React) and backend (Node.js), streamlining the development process.
React Frontend Setup: I initialized a React app to handle the user interface, ensuring a smooth foundation for building the app's frontend.
Node.js Backend Setup: I set up a basic Node.js server to handle backend functionality, preparing for API integration in later milestones.
Tailwind CSS Integration: I configured Tailwind CSS to enable utility-based, responsive styling throughout the project.
Login Page Development: I created the first user interface of the e-commerce platform—a functional and styled login page—allowing users to securely log into the platform.
Key Features
Folder Structure: Organized files into frontend and backend directories for better management.
Login Page: A functional login page for users to access the platform securely.
Styling: Used Tailwind CSS to style the application with modern, responsive design principles.

#Milestone 3#
Project Description
In Milestone 3, I focused on setting up the backend for the e-commerce application. This milestone involved organizing the backend code, connecting the application to MongoDB, setting up a Node.js server, and implementing basic error handling to ensure smooth operation.

What I Learned
Backend Folder Structure: I organized the backend code into a structured hierarchy, with separate folders for routes, controllers, models, and middleware.
Server Setup: I initialized a Node.js server using Express and configured it to listen on a designated port, ready to handle incoming API requests.
MongoDB Integration: I connected the application to MongoDB, ensuring efficient data storage and retrieval.
Error Handling: I implemented basic error handling to provide clear messages for debugging and better user feedback when something goes wrong.

Key Features
Backend Organization: Set up a clean folder structure for organizing backend files.
Server Initialization: Configured a basic Node.js server using Express.
Database Connection: Successfully integrated MongoDB for data management.
Error Handling: Added basic error handling for smoother server operation.

#Milestone 4#

Description
In Milestone 4, I expanded the backend functionality of the e-commerce application by introducing user data management and file uploads. This involved creating a User Model and Controller, as well as configuring Multer for handling file uploads like profile pictures.

What I Learned
User Model Creation: Designed a blueprint for user data, specifying fields like name, email, and password using a MongoDB schema.

User Controller: Implemented logic to manage user-related operations, such as adding new users and retrieving their information.
File Uploads with Multer: Configured Multer to handle and store file uploads securely, enabling the application to accept user-uploaded images.

Key Features

User Model: Defined the structure for user data in the database using MongoDB schemas.

User Controller: Managed server-side operations related to users, like handling requests for user registration or retrieval.

File Uploads: Enabled file upload functionality, allowing users to upload profile pictures that are stored on the server.

Submission Summary
Code Push: All code changes have been pushed to the GitHub repository used for previous milestones.

Repository Accessibility: The repository is publicly accessible.

README Update: Added a summary of Milestone 4 progress to the README file.

File Upload Support: Successfully configured Multer for handling and storing user-uploaded images.

#Milestone 5#
Sign-Up Page and Form Validation

Key Features:
Sign-Up Page: Developed a user-friendly registration page.
Form Validation: Implemented validation for user inputs.

Tech stack:

Frontend: React

*Milestone 6:*
  This milestone focus on the password Encryption and User Data Storage

  Key Features

       1)Password Encryption: Used bcrypt to hash passwords.
       2)User Data Storage: Saved user data securely in the user inputs.

 Tech stack used :
   - Backend : node.js

   *Milestone 7:*
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1)validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


*Milestone 8:*
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react

# Milestone 9 : In this milestone, we will create a Createproduct page using react.
Key features:
We can add and remove images from the webpage.
We can preview images.
We can add our names and descriptions on it.
We can specify content based on category.
We can specify tags.
We can specify prices range.
We can include our preferred stock.
We can add our e-mail.
Tech Stack : React