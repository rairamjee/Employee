import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Paper,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';

interface Attendance {
  date: string;
  status: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  employeeID: string;
  attendance: Attendance[];
}

const UserDetails: React.FC = () => {
  const { id } = useParams(); // Extract user ID from URL
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`http://localhost:5000/api/emp/employees/${id}`);
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Paper sx={{ padding: '2rem', margin: '2rem' }}>
      {user && (
        <Box>
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="h6">
            Employee ID: {user.employeeID}
          </Typography>
          <Typography variant="h6">
            Email: {user.email}
          </Typography>
          <Typography variant="h6">
            Phone: {user.phoneNumber}
          </Typography>
          <Typography variant="h6">
            Attendance:
          </Typography>
          <ul>
            {user.attendance.map((record, index) => (
              <li key={index}>
                {new Date(record.date).toLocaleDateString()}: {record.status}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Paper>
  );
};

export default UserDetails;
