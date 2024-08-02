require('dotenv').config(); // Load environment variables from .env file

const config = {
    mongoURI: process.env.MONGO_URI
};

module.exports = config;
