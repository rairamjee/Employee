const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const config = require('./config'); // Load configuration

const app = express();
const port = process.env.PORT || 5000; // Use environment port or default to 5000

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your front-end URL or use '*' for all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Import and use routes (adjust the path as necessary)
const userRoutes = require('./routes/userRoutes'); // Adjust the path as necessary
app.use('/api/users', userRoutes);


const employeeRoutes = require('./routes/employees'); // Adjust the path as necessary
app.use('/api/emp', employeeRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
