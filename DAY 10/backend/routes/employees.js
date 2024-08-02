const express = require('express');
const router = express.Router();
const Employee= require('../models/User');

// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
        console.log(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get employee by ID
router.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports= router;




