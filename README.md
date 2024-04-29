
# Paytm Clone

This project is a simplified Paytm clone designed to provide basic functionalities for user authentication and fund transfers. It utilizes a stack consisting of Node.js, Express, MongoDB for the backend, and React for the frontend. JSON Web Token (JWT) and Zod are employed for backend validation.

## Features

- **User Authentication**: Allows users to sign up and sign in securely.
- **JWT Token Sessions**: Authenticate using JSON Web Tokens.
- **Search Users**: Allows you to search for users using a searchBar.
- **Fund Transfer**: Enables users to transfer money from one account to another.

## Tech Stack

### Backend
- Node.js: JavaScript runtime for server-side development.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user data and transaction history.

### Frontend
- React: JavaScript library for building user interfaces.

## Setup

### Setup the Repository

```bash
git clone https://github.com/Hh440/paytmClone.git
cd paytm-clone
```

Backend

```bash
cd backend
npm install
node index.js
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

### MongoDB Setup

In the backend/db/db.js file, replace the MongoDB URL with your MongoDB instance.
