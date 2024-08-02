import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Home/DashBoard/Dashboard';
import EmployeeDetails from './Components/Home/Details/EmployeeDetails';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
            <Route path="/user/:id" element={<EmployeeDetails />} />
        </Routes>
    </Router>
);

export default App;
