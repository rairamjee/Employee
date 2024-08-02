import React from 'react';
import { List, ListItem, ListItemText, Divider, Drawer, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom'; // Import Link
import './Sidebar.css'; // Ensure this path is correct

const Sidebar = () => {
    const handleLogout = () => {
        // Clear authentication tokens or perform any necessary logout operations
        // Redirect to login page or homepage
        window.location.href = '/'; // Adjust the route as needed
    };

    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    backgroundColor: '#122436',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box sx={{ padding: '1rem', textAlign: 'center' }} className="company-details">
                <img
                    src="/logo192.png" // Path relative to public folder
                    alt="Company Logo"
                    style={{
                        width: '50px',
                        height: '50px',
                        marginBottom: '0.5rem',
                        borderRadius: '50%',
                        textAlign: 'left'
                    }}
                />
                <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                    Jman Digital
                </Typography>
            </Box>
            <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
                <List>
                    <ListItem
                        button
                        component={Link}
                        to="/home"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#122436',
                            },
                        }}
                    >
                        <HomeIcon sx={{ margin: '0.5rem 1rem' }} />
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/users"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#122436',
                            },
                        }}
                    >
                        <ManageAccountsIcon sx={{ margin: '0.5rem 1rem' }} />
                        <ListItemText primary="Details" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/profile"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#122436',
                            },
                        }}
                    >
                        <PersonIcon sx={{ margin: '0.5rem 1rem' }} />
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/calendar"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#122436',
                            },
                        }}
                    >
                        <CalendarTodayIcon sx={{ margin: '0.5rem 1rem' }} />
                        <ListItemText primary="Calendar" />
                    </ListItem>
                </List>
                <Divider />
                {/* Logout Button */}
                <List sx={{ marginTop: 'auto' }}>
                    <ListItem button onClick={handleLogout} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: '#122436',
                        },
                    }}>
                        <ExitToAppIcon sx={{ margin: '0.5rem 1rem' }} />
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
