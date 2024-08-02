import React from 'react';
import UserTable from '../Details/EmployeeDetails'; // Adjust the import path as needed
import Sidebar from '../Sidebar/Sidebar'; // Adjust the import path as needed
import { Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, padding: '2rem'  }}>
                <UserTable />
            </Box>
        </Box>
    );
};

export default Dashboard;

