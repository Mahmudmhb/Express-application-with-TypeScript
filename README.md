# Backend Project README

Welcome to our backend project! This application provides RESTful APIs for managing products and orders.

## Features

- Create, update, and delete products.
- Search products by title, description, or category.
- Get single product by ID.
- Add orders.
- Get orders.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Joi for input validation

## Setup Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine. You can download it from [Node.js website](https://nodejs.org/).
- MongoDB installed and running locally or have access to a MongoDB database.

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <repository_url># Backend Project README

Welcome to our backend project! This application provides RESTful APIs for managing products and orders.

## Features

- Create, update, and delete products.
- Search products by title, description, or category.
- Get single product by ID.
- Add orders.
- Get orders.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Joi for input validation

## Setup Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine. You can download it from [Node.js website](https://nodejs.org/).
- MongoDB installed and running locally or have access to a MongoDB database.

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <repository_url>Navigate to the project directory:
   
2.Navigate to the project directory:
cd <project_directory>
3.Install dependencies:

npm install
4.Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables:
PORT: Port number for the server (e.g., 5000).
MONGODB_URI: MongoDB connection URI (e.g., mongodb://localhost:27017/mydatabase).
Start the server:

npm start
Access the API endpoints:
Once the server is running, you can access the API endpoints using tools like Postman or curl. Here are some example endpoints:

Create a product: POST http://localhost:5000/api/products
Get all products: GET http://localhost:5000/api/products
Search products: GET http://localhost:5000/api/products/search?q=<query>
Add an order: POST http://localhost:5000/api/orders
Get all orders: GET http://localhost:5000/api/orders
API Endpoints
Create Product: POST /api/products
Update Product: PUT /api/products/{productId}
Delete Product: DELETE /api/products/{productId}
Get Single Product: GET /api/products/{productId}
Search Products: GET /api/products/search?q={query}
Add Order: POST /api/orders
Get Orders: GET /api/orders
