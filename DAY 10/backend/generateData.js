const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // Updated import statement
const User = require('./models/User'); // Path to your User model
const config = require('./config'); // Path to your config file

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Connected to MongoDB');

    // Generate and save 20 users
    for (let i = 0; i < 20; i++) {
        const user = new User({
            name: faker.person.fullName(), // Updated method
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            employeeID: faker.string.uuid(), // Updated method
            attendance: generateAttendance()
        });

        try {
            await user.save();
            console.log(`User ${user.name} saved successfully.`);
        } catch (err) {
            console.error(`Error saving user ${user.name}:`, err);
        }
    }

    mongoose.connection.close();
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

// Function to generate attendance for the past 3 months
function generateAttendance() {
    const attendance = [];
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3); // 3 months ago

    for (let i = 0; i < 90; i++) { // Assuming 90 days in 3 months
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        const status = Math.random() > 0.2 ? 'Present' : 'Absent'; // 80% chance of being present

        attendance.push({
            date: date.toISOString().split('T')[0], // Format: YYYY-MM-DD
            status: status
        });
    }

    return attendance;
}
