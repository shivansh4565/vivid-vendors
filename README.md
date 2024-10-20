 **Vivid Vendors**:



# Vivid Vendors

Welcome to **Vivid Vendors**, an online shopping platform built using the MERN stack! Our goal is to provide users with a vibrant and seamless shopping experience featuring a wide range of products.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **MERN Stack**:
  - **MongoDB**: NoSQL database for storing user and product data.
  - **Express.js**: Web framework for building the RESTful API.
  - **React.js**: Frontend library for creating user interfaces.
  - **Node.js**: JavaScript runtime for server-side development.

- **Additional Libraries**:
  - Redux for state management
  - Axios for HTTP requests
  - bcrypt for password hashing
  - JWT for authentication
  - Material-UI for UI components

## Features

- User Registration and Login
- Dynamic Product Listings with filtering options
- Shopping Cart functionality
- Secure Checkout process
- User Profile Management
- Admin Panel for product and order management

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/vivid-vendors.git
cd vivid-vendors
```

### Install Backend Dependencies

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### Install Frontend Dependencies

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Start the Application

In separate terminal windows, start the backend and frontend:

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Start the client:
   ```bash
   cd client
   npm start
   ```

## Usage

Once the application is running, you can access **Vivid Vendors** at `http://localhost:3000`. Users can register, log in, browse products, add items to their cart, and complete the checkout process.

## Contributing

Contributions are welcome! If you have suggestions or find bugs, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
