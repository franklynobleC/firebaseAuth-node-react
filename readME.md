TODO:

- make The ReadMe More Specific

---

# Project Name

Project Description: Briefly describe what your project does and its key features.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [`npm install`](#npm-install)
  - [`npm install`](#npm-install-1)
  - [Usage](#usage)
    - [`npm start`](#npm-start)
  - [RequireMents](#requirements)
  - [Steps To Create Firebase Project After signUp](#steps-to-create-firebase-project-after-signup)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)

## Installation

1. Clone the repository:

`  git clone <repository-url>`

2. Install dependencies for the frontend:

   cd react-frontend

   #### `npm install`

3. Install dependencies for the backend:
   cd api
   ## `npm install`

## Usage

1. Start the frontend development server:

   cd react-frontend
   npm start

2. Start the backend server:

   cd api

#### `npm start`

3. Access the application in your web browser at `http://localhost:3000`.

## RequireMents

Before you are able to use The FireBase Third Party Auth, you need to Sign to with fireBase to have an Account
sign up to firebase: https://firebase.google.com/

## Steps To Create Firebase Project After signUp

1 To create fireBase project, click on 'Create a project'.

- give the project a name
- click on continue to proceed
- 2 To create fireBase project
- I accept the Google Analytics terms
- click on 'Create project'.

## Technologies Used

- React.js
- Node.js
- Firebase Authentication
- Express.js
- MongoDB (This Would Be implemented in The Future)

## Features

- User registration and login using Firebase Authentication.
- Token-based authentication between the frontend and backend.
- Access control for protected routes on the backend.
- Example features specific to your application.

## API Endpoints

the API endpoints and their corresponding functionality.

- `GET /` : This Route can be accessed by all users.
- `GET /api/protected`: protected route. Only Logged In users can Access this Route.

## Authentication

Describe how the authentication flow works in your application. For example:

1. The frontend sends a request to the Firebase Authentication API to register's, and automatically logs in a user.
2. Upon successful authentication, the frontend receives an authentication token from Firebase.
3. The frontend includes this token in the headers of subsequent requests to the backend.
4. The backend verifies the token using Firebase's Admin SDK and grants access to protected routes.
