

require('dotenv').config();  // Load environment variables from .env file
const mysql = require('mysql');  // Import the mysql package for MySQL connection

// Create a connection to the MySQL database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Use DB_HOST variable from .env
  port: process.env.DB_PORT, // Use DB_PORT variable from .env
  user: process.env.DB_USER, // Use DB_USER variable from .env
  password: process.env.DB_PASSWORD, // Use DB_PASSWORD variable from .env
  database: process.env.DB_NAME, // Use DB_NAME variable from .env
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {  // Check for connection errors
    console.error('Error connecting to MySQL:', err); // Log any error
    return;  // Exit if there's an error
  }
  console.log('Connected to MySQL database'); // Log successful connection

  // Close the database connection immediately after connecting
  connection.end();  // Properly close the connection
});

