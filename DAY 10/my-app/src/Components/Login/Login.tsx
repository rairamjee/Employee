import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        // Hardcoded credentials
        const validEmail = 'manager@gmail.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
            setMessage('Login successful!');
            navigate('/home'); // Navigate to the home page
        } else {
            setMessage('Invalid email or password.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <input
                    style={{ width: '250px' }}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={{ width: '250px' }}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
                <button
                    onClick={handleLogin}
                    style={{ fontSize: '16px', width: '150px', marginTop: '2.5rem' }}
                >
                    Login
                </button>
            </div>
            <div className="login-image-section">
                <img
                    src='/loginpage.jpg'
                    alt='Login page'
                    style={{ width: '500px', height: '500px' }}
                />
            </div>
        </div>
    );
};

export default Login;
